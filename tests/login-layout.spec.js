import { test, expect } from "@playwright/test";

test("login fits short screens and keeps all controls reachable without scrollbars", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "This test supplies its own viewport matrix.",
  );
  await page.route("https://dwpllc-server.onrender.com/login", (route) =>
    route.fulfill({ status: 401, contentType: "application/json", body: "{}" }),
  );
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);

  for (const [width, height] of [
    [1440, 768],
    [1366, 600],
    [390, 664],
    [320, 568],
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    await page.locator(".header-actions .member-login").click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toHaveCSS("opacity", "1");
    await expect(dialog).toBeInViewport({ ratio: 1 });
    await page.getByLabel("Username", { exact: true }).fill("invalid");
    await page.getByLabel("Password", { exact: true }).fill("invalid");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page.getByRole("alert")).toHaveText(
      "Invalid credentials. Contact the admin Momo_King.",
    );
    await expect(dialog).toBeInViewport({ ratio: 1 });
    const layout = await dialog.evaluate((element) => {
      const body = element.querySelector(".chakra-modal__body");
      const container = element.parentElement;
      return {
        innerOverflow: body.scrollHeight > body.clientHeight + 1,
        outerOverflow: container.scrollHeight > container.clientHeight + 1,
        horizontalOverflow: container.scrollWidth > container.clientWidth + 1,
        scrollbar: getComputedStyle(container).scrollbarWidth,
      };
    });
    expect(layout, `${width} × ${height}`).toEqual({
      innerOverflow: false,
      outerOverflow: false,
      horizontalOverflow: false,
      scrollbar: "none",
    });
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  }

  // Simulate the reduced space left by an on-screen keyboard or browser zoom.
  await page.setViewportSize({ width: 320, height: 320 });
  await page.locator(".header-actions .member-login").click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toHaveCSS("opacity", "1");
  const container = page.locator(".chakra-modal__content-container");
  await expect(container).toHaveCSS("scrollbar-width", "none");
  const apply = dialog.getByRole("link", { name: "Apply to Dark Water" });
  await apply.scrollIntoViewIfNeeded();
  await expect(apply).toBeInViewport({ ratio: 1 });
  const close = dialog.getByRole("button", { name: "Close member login" });
  await close.scrollIntoViewIfNeeded();
  await expect(close).toBeInViewport({ ratio: 1 });
  await close.click();
  await expect(dialog).not.toBeVisible();
});
