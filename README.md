# Texas Technology Infrastructure Website

Official website for **Texas Technology Infrastructure LLC**, a Dallas–Fort Worth technology services company providing IT support, managed IT services, network management, network infrastructure, structured cabling, field services, and project support.

## Project Overview

This repository contains the source code for the Texas Technology Infrastructure website.

The website is built as a static site using **Astro** and is designed to serve as the primary online presence for TTI, including:

* Company and service information
* Managed IT and technology services
* MSP / provider field support
* Network infrastructure and structured cabling
* Multifamily and commercial technology services
* Contractor and project support
* Service-area information
* Lead generation and customer contact

## Tech Stack

* **Astro**
* **TypeScript**
* **HTML / CSS**
* **npm**
* **Inter Variable**
* **Manrope Variable**
* **Netlify** for deployment
* **GitHub** for source control

The project uses Astro's strict TypeScript configuration and generates a static production site.

## Requirements

* **Node.js 22.12.0 or newer**
* **npm**

## Local Development

Clone the repository:

```bash
git clone git@github.com:texas-technology-infrastructure/tti-website.git
```

Enter the project directory:

```bash
cd tti-website
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will normally make the development site available at:

```text
http://localhost:4321
```

## Available Commands

| Command           | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install project dependencies             |
| `npm run dev`     | Start the local Astro development server |
| `npm run build`   | Create the production build              |
| `npm run preview` | Preview the production build locally     |
| `npm run astro`   | Run Astro CLI commands                   |

## Project Structure

```text
tti-website/
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Project images and other source assets
│   ├── components/          # Shared site components
│   │   └── home/            # Homepage-specific components
│   ├── data/
│   │   └── site.ts          # Central site/company data
│   ├── layouts/             # Shared Astro page layouts
│   └── pages/               # Website routes
│       ├── index.astro
│       ├── services.astro
│       ├── industries.astro
│       ├── service-area.astro
│       ├── about.astro
│       ├── contact/
│       ├── privacy.astro
│       └── terms.astro
├── astro.config.mjs         # Astro configuration
├── netlify.toml             # Netlify configuration
├── package.json             # Project dependencies and scripts
├── package-lock.json
└── tsconfig.json            # TypeScript configuration
```

## Production Build

Before committing production-ready changes, verify that the site builds successfully:

```bash
npm run build
```

The generated production files are written to:

```text
dist/
```

The `dist/` directory is generated automatically and should not be committed to Git.

## Deployment

The site is deployed through **Netlify**.

The Astro site configuration uses:

```text
https://texastechnologyinfrastructure.com
```

as the canonical production site URL.

The normal deployment workflow is:

```text
Local development
      ↓
git commit
      ↓
git push
      ↓
GitHub
      ↓
Netlify deployment
```

## Git Workflow

The primary branch is:

```text
main
```

Typical workflow:

```bash
git status
git add .
git commit -m "describe the change"
git push
```

Before committing significant changes:

```bash
npm run build
```

and confirm that the build completes successfully.

## Repository

This repository is owned by the **Texas Technology Infrastructure** GitHub organization.

```text
texas-technology-infrastructure/tti-website
```

The repository is currently private.

## Current Development Areas

The site includes the primary TTI website structure and is under active development.

Core areas include:

* Homepage
* Services
* Industries
* Service area
* About
* Contact
* Privacy policy
* Terms
* Production configuration
* Search-engine and deployment hardening

## Company

**Texas Technology Infrastructure LLC**

Dallas–Fort Worth, Texas

Technology infrastructure, field services, network deployment, and business technology solutions.

---

© Texas Technology Infrastructure LLC. All rights reserved.
