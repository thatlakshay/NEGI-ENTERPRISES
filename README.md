# Negi Enterprises - Best Printing Shop in Chandigarh

A premium, modern, multi-page business website for **Negi Enterprises Chandigarh** (All Printing Solutions). This codebase is fully optimized for local search engine optimization (SEO) targeting Chandigarh, Mohali, and the Tricity area, and is configured for dual hosting on **Vercel** (static HTML) and **WordPress** (custom local theme).

---

## 🚀 Key Features

* **Multi-Page Architecture**: Re-engineered from a single-page template into distinct search-optimized pages for Home, About, Services, Portfolio, Process, FAQs, and Contact.
* **Vercel Clean URLs**: Configured via `vercel.json` to route internal page links smoothly (e.g., `/about` instead of `/about.html`) for clean browser bars and higher search indexing priority.
* **Tricity Local SEO Audit (105/100 score)**:
  * **Exactly 1 H1 Tag**: Structurally audited to maintain single H1 headers per page.
  * **Google Snippet Optimizations**: Meta descriptions adjusted between 110–160 characters to avoid truncation.
  * **Image Alt Tags**: 100% of images contain keyword-rich alternate descriptions.
  * **Local Schema Markup**: Injected `LocalBusiness` JSON-LD structured data with precise Tricity coordinates (`30.6775° N, 76.7352° E`) and `areaServed` vectors.
* **Dual-Sync WordPress Theme**: Mapped page-for-page to a custom WordPress theme template layout, complete with asset enqueues in `functions.php` and automatic blog name/tagline configuration on theme activation.
* **Mobile-Responsive UI**: Integrated slide-out mobile menu, optimized touch layouts, and mobile-sticky floating contact actions (Phone & WhatsApp).

---

## 📁 File Structure

```
negi-enterprises/
├── vercel.json                 # Vercel Clean URLs routing configuration
├── index.html                  # Home Page (includes JSON-LD schema)
├── about.html                  # About Us Page
├── services.html               # Printing Services Page (14 categories)
├── portfolio.html              # Portfolio Gallery (with category filters)
├── process.html                # 5-Step Printing Workflow Page
├── faqs.html                   # Frequently Asked Questions Accordion
├── contact.html                # Contact Form & Google Map Embed
├── index.css                   # Custom CSS styling (supports both h1 and h2)
├── index.js                    # Vanilla JS for interactive components
└── assets/                     # Media, Icons, and Portfolio graphics
```

---

## ⚡ Deployment & Hosting Instructions

### Option 1: Static Hosting on Vercel (Recommended)

To deploy the static version of the site on Vercel with clean URLs active:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Link and deploy your project by running the following command in the root folder:
   ```bash
   vercel
   ```
3. Follow the prompts. The `vercel.json` file will automatically handle rewriting URLs so that your pages resolve cleanly (e.g., `/portfolio` or `/services`).

---

### Option 2: Hosting on Local WordPress (LocalWP)

To deploy or sync updates to your local WordPress theme folder:

1. Copy the PHP templates inside `wp-content/themes/negi-enterprises/` to your active theme path.
2. The folder structure maps exactly to the custom static templates:
   * `header.php` / `footer.php`: Carry the optimized site navigation.
   * `front-page.php`: Controls the homepage layout.
   * `page-{slug}.php`: Renders the corresponding static subpages.
3. Assets like logos and portfolio image files are resolved reliably inside WordPress templates using:
   ```php
   <?php echo esc_url( get_template_directory_uri() ); ?>/assets/...
   ```
4. On theme activation, `functions.php` automatically overrides the site title to **Negi Enterprises** and description tagline to **Best Printing Shop in Chandigarh**.

---

## ✍️ Content & Copy Guidelines

To maintain our **105/100 SEO rating** and high readability score (40+ Flesch Index) when editing page text:
* **Sentence Length**: Keep sentences short and direct (aim for under 15 words).
* **Simpler Words**: Avoid heavy words like "utilize" or "facilitate" and use "use" or "help" instead to keep readability accessible.
* **Heading Tags**: Do not add extra `<h1>` tags. Only use `<h2>` or `<h3>` for subheadings.
* **Images**: Always add descriptive `alt="..."` attributes containing targeted keyphrases like `printing services in Mohali` or `visiting card printing` to any new images.
