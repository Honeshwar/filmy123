Migrating from **React (Vite)** to **Next.js** is a solid move and can be done step-by-step to ensure smooth transition. Below is your **step-by-step guide tailored for your project**:

---

## ✅ Step 1: **Initialize a New Next.js App**

Use the `create-next-app` CLI to bootstrap the project.

```bash
npx create-next-app@latest nextjs-shadcn-ts --typescript --tailwind
```

Options to choose:
- App Router ✅
- Tailwind ✅
- ESLint ✅
- src directory ✅
- Use import alias ✅

> You can delete boilerplate files from the new app after generation (`app/page.tsx`, etc.)

---

## ✅ Step 2: **Move your Codebase**

### 📁 1. **Move Your Components and Utils**

Copy over:
- All your components (`src/components/`)
- Utilities / helper functions
- Hooks

### 📁 2. **Pages/Routing**

You’re using `react-router-dom` currently. In Next.js:
- Remove `react-router-dom`
- Use the **App Router** or **Pages Router** (App Router recommended)

For example:
`/about` → `src/app/about/page.tsx`  
`/dashboard` → `src/app/dashboard/page.tsx`

---

## ✅ Step 3: **Install Needed Dependencies**

Check your current `package.json` for libraries you used, and install them in your Next.js project:

```bash
npm install \
@hookform/resolvers \
@radix-ui/react-* \
@tanstack/react-query \
clsx \
lucide-react \
react-day-picker \
react-hook-form \
recharts \
zod \
sonner \
next-themes \
date-fns \
embla-carousel-react
```

**Not needed anymore:**
- `react-router-dom`
- `vite`, `@vitejs/plugin-react-swc` (Next uses Webpack or Turbopack)

---

## ✅ Step 4: **Tailwind & ShadCN Setup**

Since you’re already using **ShadCN UI**, follow the same steps in the new project:

```bash
npx shadcn-ui@latest init
```

Follow prompts to:
- Choose your `components/` path
- Confirm Tailwind setup

Then install any missing UI components again via:

```bash
npx shadcn-ui@latest add button
```

---

## ✅ Step 5: **Convert Vite Config to Next Config**

In Vite, you had custom `vite.config.ts`.  
In Next.js, use `next.config.js` or `next.config.ts`.

Example:

```ts
// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
```

---

## ✅ Step 6: **Set up `React Query` Hydration (Optional)**

In your root layout or page (e.g. `src/app/layout.tsx`):

```tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

Then wrap `children` with `<Providers>` in `layout.tsx`.

---

## ✅ Step 7: **Replace `index.html` with `_document.tsx`**

Your Vite project used `index.html` as the entry.  
Next.js uses `app/layout.tsx` and optionally `_document.tsx` (in `pages/` router).

---

## ✅ Step 8: **Update TypeScript Config**

Use the default `tsconfig.json` created by `create-next-app` and merge your custom paths and strict rules into it.

---

## ✅ Step 9: **Test Everything**

- Run dev server: `npm run dev`
- Fix any TypeScript or runtime errors
- Check routes, forms, UI components

---

## ✅ Step 10: **Clean Up**

- Remove unused dependencies (`react-router-dom`, `vite`, etc.)
- Remove old Vite files like `vite.config.ts`, `index.html`

---

## 🔁 Optional Final Step: Export Static (If Needed)

```bash
// next.config.ts
export const nextConfig = {
  output: 'export',
  // ...rest
}
```

Then:

```bash
npm run build
npm run export
```

---

Want me to create a complete **migration template** repo structure based on your project? I can also assist with a **side-by-side folder mapping** or help you **migrate individual components/pages**.