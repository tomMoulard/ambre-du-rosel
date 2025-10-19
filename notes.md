````markdown
### ROLE & GOAL

You are an expert full-stack web developer specializing in creating production-ready, high-performance static websites with Astro.js, Tailwind CSS, and advanced SEO implementations.

Your goal is to generate the complete source code for a new static website for a French lawyer. The website must be elegant, professional, and optimized for search engines, following the specific design and technical requirements outlined below.

---

### TASK

1.  **Project Scaffolding:**
    * The project will be initialized using Astro's CLI. The target user will run `npm create astro@latest` and select an "Empty" project template.
    * You must generate the complete configuration and code *after* the initial scaffolding.
    * The package manager is **yarn**.
    * Integrate the following Astro packages:
        * `tailwindcss` for styling.
        * `@astrojs/sitemap` for sitemap generation.
        * `astro-seo` for comprehensive SEO metadata management.

2.  **Website Structure and Pages:**
    Create a logical file structure. Generate the full code for the following pages and components in French:
    * **Layout (`src/layouts/Layout.astro`):**
        * A main layout that includes the `Header`, `Footer`, and the `<SEO />` component from `astro-seo`.
        * It should define the main HTML structure (`<html>`, `<head>`, `<body>`).
    * **Components (`src/components/`):**
        * `Header.astro`: Contains the site logo/lawyer's name and navigation links.
        * `Footer.astro`: Contains contact details, social media links (placeholders), and a link to the "Mentions Légales" page.
        * `Navigation.astro`: A responsive navigation bar.
    * **Pages (`src/pages/`):**
        * **`index.astro` (Accueil):** The homepage. It should feature a professional hero section, an introduction to the lawyer, a summary of practice areas, and a clear call-to-action (CTA) to the contact/booking page.
        * **`a-propos.astro` (À Propos):** A page detailing the lawyer's background, philosophy, and professional experience.
        * **`competences.astro` (Compétences):** A page outlining the lawyer's areas of expertise (e.g., Droit de la famille, Droit pénal, Droit des sociétés).
        * **`contact.astro` (Contact & Prise de Rendez-vous):** This page will include a contact information section and prominently feature an embedded Cal.com widget for appointment booking and payment. Use a placeholder for the Cal.com link.
        * **`mentions-legales.astro` (Mentions Légales):** A standard legal notices page required for websites in France. Use placeholder content.

3.  **Design and Styling (Tailwind CSS):**
    * **Aesthetic:** The design must be classical, stylish, fancy, and professional. Analyze the design language of the provided inspiration sites.
    * **Inspiration URLs:**
        * `https://www.aurore-miquel-avocat.fr/`
        * `https://www.rgruet-avocate.fr/`
        * `https://www.sakhri-avocat.com/`
    * **Color Palette:**
        * Primary: A deep **burgundy** (e.g., `bg-slate-900`, `text-slate-100`).
        * Accent: A rich **gold** (e.g., `text-amber-400`).
        * Background/Text: Use professional, high-contrast neutral colors (e.g., off-white, dark gray).
    * **Typography:** Configure `tailwind.config.mjs` to use elegant and readable fonts. Suggest using a classic serif font (e.g., 'Cormorant Garamond') for headings and a clean sans-serif (e.g., 'Lato') for body text, imported from Google Fonts.
    * **Layout:** The layout must be fully responsive, using Tailwind's mobile-first utility classes.

4.  **Feature Implementation:**
    * **Image Optimization:** Use Astro's `<Image />` component for all images (use relevant placeholders from a service like `picsum.photos` or `placehold.co`).
    * **SEO:**
        * In the main `Layout.astro`, implement the `<SEO />` component from `astro-seo`.
        * Each page must pass unique `title`, `description`, and `canonical` props to the layout to populate the SEO tags correctly.
        * Ensure all content uses semantic HTML5 tags (`<main>`, `<section>`, `<article>`, `<nav>`, etc.).
    * **Sitemap:** Generate the `astro.config.mjs` file fully configured to use `@astrojs/sitemap`.
    * **Cal.com Integration:** On the `contact.astro` page, provide the code to embed a Cal.com booking interface, typically using an `<iframe>`. Use the placeholder URL `https://cal.com/YOUR_USERNAME/30min`.

---

### PROVIDED CODE

The project starts from scratch. The following commands are assumed to have been run by the user to set up the initial project and dependencies. Your generated code should work within this context.

```bash
# 1. Create the Astro project
npm create astro@latest my-lawyer-site -- --template empty

# 2. Navigate into the project
cd my-lawyer-site

# 3. Initialize yarn and install dependencies
yarn

# 4. Add Astro integrations
npx astro add tailwindcss
npx astro add sitemap
yarn add astro-seo
````

You are to generate the content of all necessary files (`astro.config.mjs`, `tailwind.config.mjs`, `src/layouts/*.astro`, `src/pages/*.astro`, `src/components/*.astro`, `src/styles/global.css`).

-----

### CRITICAL RULES

  * **Strict Adherence to Tech Stack:** Use only Astro, Tailwind CSS, and the specified Astro integrations. Do not introduce other libraries or frameworks.
  * **Code Completeness:** Provide the full, complete code for every file. Do not use placeholders like `// ... your code here`. The output must be a ready-to-use project structure.
  * **Style and Convention Inference:** Infer the project's coding style, formatting, and conventions directly from the standard, clean output of the Astro CLI. Maintain this consistency throughout the generated code.
  * **Component-Based Architecture:** Decompose the UI into reusable Astro components as specified in the task list (Header, Footer, etc.).
  * **No Conversational Output:** Generate only the file structure and the code. Do not include any explanations, greetings, or summaries.
  * **Language:** All user-facing text (headings, links, placeholder content) must be in **French**.
  * **Responsiveness:** All styling must be mobile-first and fully responsive across all standard device sizes.

IMPORTANT NOTE: Start directly with the output, do not output any delimiters.
Take a Deep Breath, read the instructions again, read the inputs again. Each instruction is crucial and must be executed with utmost care and attention to detail.
```
