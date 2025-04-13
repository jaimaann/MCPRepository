# MCPRepository.net

A professional repository website built with Next.js.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Contains the main pages and layouts
- `src/components/`: Contains reusable components like Header and Footer
- `public/`: Contains static assets

## Features

- Professional header with navigation
- Comprehensive footer with multiple sections
- Responsive design
- TypeScript support
- Google Analytics integration

## Google Analytics Setup

This project includes Google Analytics integration using `@next/third-parties`. To use it:

1. Replace the placeholder GA ID in `.env.local` with your actual Google Analytics Measurement ID:
```
NEXT_PUBLIC_GA_ID=G-7N91QXYZG4
```

2. If you don't have a `.env.local` file, create one at the root of the project with the content above.

The Google Analytics component will automatically be loaded in the layout.
