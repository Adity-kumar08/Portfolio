# Aditya Kumar Portfolio

A premium, production-quality personal portfolio website built for modern web standards.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile.
- **Dark Theme**: Minimal, modern, and technical visual direction.
- **Configurable Content**: Data is decoupled from the UI (`src/data/`).
- **Interactive UI**: Smooth scroll, scroll-reveal animations, hover states.
- **SEO Optimized**: Appropriate metadata and semantic structure.

## Project Structure

```
/src
  /app           # Next.js App Router (pages, layout, styles)
  /components
    /layout      # Navbar, Footer
    /sections    # Hero, About, Projects, Experience, Skills, Contact
  /data          # Centralized configuration (projects, skills, personal, etc.)
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Production testing:
   ```bash
   npm run build
   npm run start
   ```

## Vercel Deployment

This project is configured specifically for reliable deployment on Vercel. 
It uses standard Next.js features and does not require a custom `vercel.json` or custom build scripts.

To deploy:
1. Push the code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Next.js framework and build the project.

No environment variables are required by default, but if you add a backend email service later, you can securely configure the keys in the Vercel dashboard.
