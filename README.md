# Hari Sumanth Portfolio

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and create the production build in `dist/`.

## Update portfolio content

- Edit `src/data/portfolio.ts` to update project descriptions, services, skills, process steps and FAQs.
- Replace a project's `image` with an image URL you control. Add an optional `url` to open a live project link from its detail modal.
- Replace the profile-image placeholder in the About section when Hari's portrait is available.
- The page title, description and keyword metadata are in `index.html`; keep keywords aligned with real services and avoid repeating them unnaturally in page copy.
- Update the social profile URLs and contact details using the environment variables below.
- Update `public/sitemap.xml` with the production site URL before launch.

## Contact configuration

Copy `.env.example` to `.env.local` and set the contact details:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_WHATSAPP_NUMBER=countrycodeandnumber
VITE_INSTAGRAM_URL=https://www.instagram.com/your-profile/
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile/
VITE_GITHUB_URL=https://github.com/your-profile
```

The enquiry form validates the fields and opens an email draft. No details are submitted to a server. If no email is configured, the draft opens without a recipient. Without a WhatsApp number, the WhatsApp link opens a share-message flow instead of linking to a specific account.
