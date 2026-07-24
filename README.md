# Manish Steel Traders — website

A fast, mobile-first **static website** for Manish Steel Traders Pvt. Ltd. (Nagpur).
Plain HTML/CSS/JS — **no build step, no framework**. Just edit the files and upload.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `products.html` | Products & services |
| `about.html` | About / why us |
| `contact.html` | Contact (Call / WhatsApp / Email) |

Shared: `assets/css/styles.css`, `assets/js/main.js`, `assets/img/` (logo, favicon).
Every page has the same header, footer, and a floating WhatsApp button.

## Preview locally
Just double-click `index.html` — it opens in your browser. (No server needed.
The Google Fonts and, once added, the Google Map load only when you're online.)

---

## Before you go live — fill these in

Everything below is a **placeholder** in the site (search for the text in brackets):

1. **GST number** — replace `[add GSTIN]` (footer of every page).
2. **Full address + PIN** — replace `Ghat Road, Nagpur, Maharashtra [PIN]` (footer + contact page).
3. **Business hours** — on `contact.html` (`add your hours …`).
4. **Email mailbox** — the site emails `manish@manishsteeltraders.com`. Make sure that
   mailbox exists (set up with Google Workspace) or change it to your working address.
5. **Product details** — on `products.html`, confirm the **grades** (Fe500/Fe500D/Fe550D),
   **brand names**, and which structural items you actually stock. Edit the lists to match.
6. **Stats** — the Home "trust strip" uses safe placeholders; swap in real figures you can
   back, or leave as-is.
7. **Testimonials** — `index.html` has two placeholder quotes. Replace with real ones (with
   the builder's permission) or delete that section.
8. **Photos & logo** — see `assets/img/PLACEHOLDERS.txt`. Drop in real images (keep the same
   filenames) and swap the striped grey boxes (`class="ph"`) for `<img>` tags.
9. **Google Map** — on `contact.html`, replace the map placeholder with your embed:
   Google Maps → search your address → **Share → Embed a map → Copy HTML** → paste the
   `<iframe>` in place of the `<div class="ph map-ph">…</div>`. (Add `class="map-embed"` to
   the iframe so it's styled.)

> The phone number `+91 98222 21699` and WhatsApp links work **today**. To change the
> number, find-and-replace `919822221699` (WhatsApp links) and `+919822221699` (call links).

---

## Publish to your domain's hosting (cPanel / FTP)

Your host (bought with `manishsteeltraders.com`) will have **one** of these:

**A) cPanel File Manager**
1. Log in to your hosting cPanel → **File Manager**.
2. Open the **`public_html`** folder (this is your website root).
3. **Upload** everything in this project — keep the folder structure:
   `index.html`, `products.html`, `about.html`, `contact.html`, `robots.txt`,
   `sitemap.xml`, and the whole **`assets/`** folder.
4. Visit `https://manishsteeltraders.com` — the site is live.

**B) FTP (FileZilla)**
1. Get FTP host / username / password from your hosting panel.
2. Connect in FileZilla, open **`public_html`**, and drag the project files in
   (preserving the `assets/` folder).

**Notes**
- Upload the **contents** of this folder into `public_html`, not the folder itself
  (so `index.html` sits directly in `public_html`).
- Make sure your host has **HTTPS/SSL** enabled (most give free Let's Encrypt in cPanel).
- After changes, re-upload only the files you edited.

---

## What's intentionally NOT here
- No contact **form** (you chose Call/WhatsApp/Email buttons) — nothing to maintain.
- No analytics. To add Google Analytics later, paste your GA snippet before `</head>`
  on each page.
- No cookie banner needed (no tracking/cookies as shipped).
