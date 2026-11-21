import { test, expect } from "@playwright/test";
import { history, charter, manifesto } from "../src/data/organization.js";

test("all supplied history and existing values are readable on every device", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Make yourown way.",
  );
  for (const item of history) {
    await page.getByRole("button", { name: item.year, exact: true }).click();
    for (const event of item.events)
      await expect(page.getByText(event.text, { exact: true })).toBeVisible();
  }
  await page.getByRole("button", { name: "Read full history" }).click();
  await expect(page.locator(".timeline li")).toHaveCount(16);
  for (const event of history.flatMap((item) => item.events))
    await expect(page.getByText(event.text, { exact: true })).toBeVisible();
  for (const item of manifesto)
    await expect(page.getByText(item.text, { exact: true })).toBeVisible();
  for (const item of charter) {
    const article = page
      .locator("details")
      .filter({ has: page.getByText(item.title, { exact: true }) });
    if (!(await article.getAttribute("open").then((value) => value !== null)))
      await article.locator("summary").click();
    await expect(page.getByText(item.text, { exact: true })).toBeVisible();
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("navigation, recruitment links and video work", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "History", exact: true })
      .click();
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toHaveAttribute("aria-expanded", "false");
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "History", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/#history$/);
  await page.getByRole("link", { name: "Find your place" }).click();
  await expect(page).toHaveURL(/#join$/);
  await expect(
    page.getByRole("link", { name: "Apply on RSI" }),
  ).toHaveAttribute(
    "href",
    "https://robertsspaceindustries.com/en/orgs/DWPLLC",
  );
  await expect(
    page.getByRole("link", { name: "Join our Discord" }),
  ).toHaveAttribute("href", "https://discord.gg/BmHpKK7");
  await page.route("https://www.youtube-nocookie.com/**", (route) =>
    route.fulfill({ status: 200, body: "<p>Video player</p>" }),
  );
  await page
    .getByRole("button", {
      name: "Play Dark Water Privateers organization video",
    })
    .click();
  await expect(
    page.getByTitle("Dark Water Privateers organization video"),
  ).toHaveAttribute("src", /embed\/cF9qWH1-oDM/);
});

test("login validates credentials, masks passwords and restores focus", async ({
  page,
}) => {
  await page.route("https://dwpllc-server.onrender.com/login", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: '{"error":"unauthorized"}',
    }),
  );
  await page.goto("/");
  const trigger = page.locator(".header-actions .member-login");
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(page.getByLabel("Username", { exact: true })).toBeFocused();
  await page.getByLabel("Username", { exact: true }).fill("gibberish");
  await page.getByLabel("Password", { exact: true }).fill("invalid-password");
  await expect(page.getByLabel("Password", { exact: true })).toHaveAttribute(
    "type",
    "password",
  );
  await page.getByRole("button", { name: "Show password" }).click();
  await expect(page.getByLabel("Password", { exact: true })).toHaveAttribute(
    "type",
    "text",
  );
  await page.getByRole("button", { name: "Hide password" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("alert")).toHaveText(
    "Invalid credentials. Contact the admin Momo_King.",
  );
  await expect(page.getByRole("alert").getByRole("link")).toHaveAttribute(
    "href",
    "https://robertsspaceindustries.com/en/citizens/Momo_King",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("network failures use the same requested credentials message", async ({
  page,
}) => {
  await page.route("https://dwpllc-server.onrender.com/login", (route) =>
    route.abort("failed"),
  );
  await page.goto("/");
  await page.locator(".header-actions .member-login").click();
  await page.getByLabel("Username", { exact: true }).fill("gibberish");
  await page.getByLabel("Password", { exact: true }).fill("gibberish");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("alert")).toHaveText(
    "Invalid credentials. Contact the admin Momo_King.",
  );
});

test("public site loads without runtime errors or missing local assets", async ({
  page,
}) => {
  const errors = [];
  const missingAssets = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:5173") &&
      response.status() >= 400
    )
      missingAssets.push(response.url());
  });
  await page.goto("/");
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = "eager";
    });
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images, (img) => img.decode().catch(() => {})),
    );
  });
  expect(
    await page
      .locator("img")
      .evaluateAll((images) =>
        images.every((image) => image.complete && image.naturalWidth > 0),
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
  expect(missingAssets).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("member portal redirects visitors before loading private content", async ({
  page,
}) => {
  const privateRequests = [];
  page.on("request", (request) => {
    if (request.url().includes("dwpllc-server.onrender.com"))
      privateRequests.push(request.url());
  });
  await page.goto("/members");
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(privateRequests).toEqual([]);
});

test("pending sign-in can be dismissed and passwords are cleared on reopen", async ({
  page,
}) => {
  await page.route(
    "https://dwpllc-server.onrender.com/login",
    async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.abort();
    },
  );
  await page.goto("/");
  const trigger = page.locator(".header-actions .member-login");
  await trigger.click();
  await page.getByLabel("Username", { exact: true }).fill("gibberish");
  await page.getByLabel("Password", { exact: true }).fill("secret");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("button", { name: "Signing in…" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(page.getByLabel("Password", { exact: true })).toBeEmpty();
  await expect(page.getByRole("alert")).toHaveCount(0);
});
