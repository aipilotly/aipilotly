# Aipilotly - Portfolio Showcase Website

A stunning, eye-catching Next.js website for showcasing portfolios and creative projects. Built by Aipilotly - ai. automation. apps.

## Features

- 🎨 **Beautiful Modern Design** - Eye-catching gradients, animations, and smooth transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 🌈 **Dynamic Gradients** - Each portfolio has unique gradient styling
- 🔍 **Interactive Portfolio Cards** - Hover effects and smooth transitions
- 🎯 **SEO Optimized** - Built-in SEO best practices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Logo.tsx         # Aipilotly logo component
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── PortfolioGrid.tsx # Portfolio grid container
│   ├── PortfolioCard.tsx # Individual portfolio card
│   └── Footer.tsx       # Footer component
├── data/
│   └── portfolio.ts     # Portfolio data
├── types/
│   └── portfolio.ts     # TypeScript types
└── public/              # Static assets
```

## Customization

### Adding New Portfolios

Edit `data/portfolio.ts` and add new portfolio objects following the `Portfolio` interface.

### Changing Colors

Modify the gradient colors in `tailwind.config.ts` and update portfolio gradients in `data/portfolio.ts`.

### Styling

All styles use Tailwind CSS. Customize by editing:
- `tailwind.config.ts` for theme configuration
- `app/globals.css` for global styles
- Component files for specific styling

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons (via lucide-react)

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

