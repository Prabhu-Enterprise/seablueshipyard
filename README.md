# Sea Blue Shipyard Ltd. — Website

Next.js (App Router, TypeScript) + PandaCSS.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Contact form

The contact and careers forms send email via [Resend](https://resend.com). Copy
`.env.local.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend account
- `RESEND_FROM_EMAIL` — a sender address on a domain verified in Resend
- `CONTACT_TO_GENERAL` / `CONTACT_TO_CAREER` — optional overrides for where
  enquiries are delivered (defaults to `enquiry@` / `career@seablueshipyard.com`)

Without `RESEND_API_KEY` set, the forms will show an error instead of sending.

## Deploy

Deploy to Vercel and set the same environment variables in the project's
Vercel dashboard (Settings → Environment Variables).
