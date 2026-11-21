<br />
<div align="center">
  <!-- <a href="https://dwpllc.vercel.app"> -->
    <img src="./src/assets/pngs/logo-small.png" alt="Logo" width="86" height="100">
  </a>

<h2 align="center">DWPLLC Client</h2>

  <p align="center">
    DWPLLC_Client is the main frontend repo for Dark Water Privateers LLC's application.
    <br />
    <br />
    <a href="https://dwpllc.vercel.app"><strong>Learn More »</strong></a>
    <br />
  </p>
</div>

## Feature List

---

- Public: All users can access the Home page and learn about the organization
- Private: Provisioned members can access the existing member directory. The fleet workspace remains planned work that depends on the separate backend.

## Technologies Used

---

- Vite
- Chakra UI
- React
- Zustand

## Development Environment Setup

---

1.  Clone this repo.

    -        `https://github.com/suwanshree/dwpllc_client`

2.  Install required dependencies from the root directory (client)

    -        `npm install`

3.  Start the services in the client directory, which should open the project in your default browser. If not, navigate to [Vite Default Localhost](http://localhost:5173/).

    -       npm run dev

## Public site refresh

The public site is a responsive, scrollable recruitment page. It includes operations, the complete 2950–2956 history, the original manifesto and charter, the organization video, RSI leadership profiles, and recruitment links.

- Edit history, manifesto, charter, and community links in `src/data/organization.js`.
- Main public sections are in `src/pages/Home/`; shared styling is in `src/styles.css`.
- Artwork and fonts are hosted locally. Artwork sources are recorded in `public/images/credits.json`; font licenses are in `public/fonts/licenses/`.
- The member login retains the existing API integration. Failed sign-ins display “Invalid credentials. Contact the admin Momo_King.” Member access still depends on the separate backend and provisioned accounts.
- `vercel.json` preserves direct navigation to the `/members` SPA route. Deploy the Vite `dist` output with the existing Vercel project.

### Verification

Use Node.js 26 (`nvm install && nvm use`). The `engines.node` field in `package.json` selects Node.js 26 for Vercel builds, overriding an older project default.

```sh
npm ci
npm run build
npx playwright install --with-deps chromium
npm run test:e2e
```

Browser tests cover desktop, tablet, and phone layouts, complete history content, navigation, charter disclosures, video activation, public links, login failures and keyboard behavior, and the member route guard. API responses are mocked in these tests; no real account credentials are required.
