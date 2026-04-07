# MealApp - CMLABS Frontend Pre-assessment Test

A meal and ingredient explorer web application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Browse foods, discover meals from around the world, and view detailed recipes with video tutorials.

## Tech Stack

| Technology | Version |
|---|---|
| Next.js (App Router) | 16.2 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| React | 19.x |
| Lucide React | Icons |
| bun | Package manager |

## Features

- Browse 800+ food ingredients with search and pagination
- Filter meals by ingredient with client-side search
- View detailed meal recipes with instructions, ingredients list, and YouTube tutorials
- **Local Culinary** — explore 37 world cuisines with country flags
- **Dark mode** — toggle between light and dark themes (persisted in localStorage)
- Fully responsive (desktop, tablet, mobile)
- Atomic component design (atoms, molecules, organisms)
- Server-side rendering with ISR caching
- Loading skeletons on every page
- Error boundaries with retry functionality
- Accessibility: aria-labels, focus rings, reduced-motion support, keyboard navigation
- SEO: OpenGraph, Twitter cards, dynamic metadata per page

## Getting Started

### Prerequisites

- Node.js 18+ (tested with v22)
- bun (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Deprasny/cmlabs-frontend-freelance-test.git
cd cmlabs-frontend-freelance-test

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
bun start
```

### Lint

```bash
bun run lint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                        # Home page
│   ├── layout.tsx                      # Root layout (Navbar + Footer)
│   ├── not-found.tsx                   # 404 page
│   ├── error.tsx                       # Global error boundary
│   ├── ingredients/
│   │   ├── page.tsx                    # Foods list (877 items)
│   │   ├── error.tsx                   # Error boundary
│   │   └── [ingredientName]/
│   │       ├── page.tsx                # Meals by ingredient
│   │       └── [mealId]/
│   │           └── page.tsx            # Meal detail
│   └── local-culinary/
│       ├── page.tsx                    # World cuisines (37 areas)
│       ├── error.tsx                   # Error boundary
│       └── [areaName]/
│           ├── page.tsx                # Meals by cuisine
│           └── [mealId]/
│               └── page.tsx            # Meal detail
├── components/
│   ├── atoms/                          # Logo, NavLink, SearchInput, Tag,
│   │                                   # SectionTitle, Skeleton, YouTubeEmbed,
│   │                                   # BreadcrumbItem, ThemeToggle, ScrollToTop
│   ├── molecules/                      # Breadcrumb, HeroSection, SearchBar,
│   │                                   # IngredientCard, MealCard, RecipeItem, AreaCard
│   └── organisms/                      # Navbar, IngredientGrid, MealGrid,
│                                       # MealDetailContent
├── hooks/
│   └── useSearch.ts                    # Debounced search with useTransition
└── lib/
    ├── api.ts                          # API fetch functions (5 endpoints)
    ├── types.ts                        # TypeScript interfaces
    ├── utils.ts                        # cn(), image URLs, YouTube parser, recipe parser
    └── constants.ts                    # API URLs, nav config
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, feature cards, and CTAs |
| `/ingredients` | Browse all foods with search and load more |
| `/ingredients/[name]` | Meals filtered by ingredient |
| `/ingredients/[name]/[id]` | Meal detail with recipe, instructions, and YouTube video |
| `/local-culinary` | Browse 37 world cuisines |
| `/local-culinary/[area]` | Meals from a specific cuisine |
| `/local-culinary/[area]/[id]` | Meal detail with recipe, instructions, and YouTube video |

## API Endpoints Used

| Endpoint | Description |
|---|---|
| `GET /list.php?i=list` | List all ingredients (877 items) |
| `GET /filter.php?i={ingredient}` | Filter meals by ingredient |
| `GET /lookup.php?i={id}` | Get full meal details |
| `GET /list.php?a=list` | List all cuisine areas (37 items) |
| `GET /filter.php?a={area}` | Filter meals by cuisine area |

All endpoints from [TheMealDB API](https://www.themealdb.com/api.php).
