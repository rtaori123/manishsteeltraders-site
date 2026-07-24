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

## Design

Restrained and professional by intent — white + charcoal with the gold logo as a thin
accent. No gradients, glow, animation, or emojis. The **home page is deliberately short**
(hero → trust row → what we supply → one contact strip); the detail lives in the inner
pages. This is aimed at large builders/contractors, who trust understated over flashy.

## Before you go live — swap these in

The site is clean and honest as-is (nothing invented). To finish it:

1. **Photos** — replace the light grey `class="photo"` boxes with real `<img>` tags
   (steel yard/stock on Home & Products, yard/team on About, and the map on Contact).
   See `assets/img/PLACEHOLDERS.txt`.
2. **Product details** — on `products.html`, confirm the exact **TMT grades**
   (e.g. Fe500 / Fe500D / Fe550D), **brand names**, and which **structural items** you
   actually stock; edit the sizes/list to match.
3. **Full address + PIN** — the site shows `Ghat Road, Nagpur, Maharashtra`; add the exact
   street line + PIN in the footer (every page) and `contact.html`.
4. **Google Map** — on `contact.html`, replace the map `photo` box with your embed
   (Google Maps → search address → **Share → Embed a map → Copy HTML**); add
   `class="map-embed"` to the pasted `<iframe>`.
5. **Email mailbox** — the site uses `manish@manishsteeltraders.com`; make sure that
   mailbox exists (Google Workspace) or change it to your working address.
6. *(Optional)* **GSTIN** and **business hours** — good trust signals to add to the footer
   / contact page once you want them shown.
7. *(Optional)* **Testimonials** — add a short section with real builder quotes (with
   permission) once you have them. None are shown now (better than fake ones).

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
