# Cat Energy — landing page

A pixel-faithful recreation of the Cat Energy landing page, built with **Vite + TailwindCSS** and your real image assets.

## Run it

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

## What's inside

```
cat-energy/
├── index.html          # full page markup (Tailwind utility classes)
├── src/
│   ├── style.css       # Tailwind v4 + Cat Energy design tokens (Oswald, brand green #68B738)
│   └── main.js         # mobile menu + before/after slider
├── public/img/         # your real assets (logo, can, cat, icons)
├── vite.config.js      # dev server pinned to port 5173
└── package.json
```

## Notes

- **Font:** Oswald (loaded from Google Fonts) — the signature condensed face of the design.
- **Interactive bits:** the БЫЛО / СТАЛО comparison slider and the responsive hamburger menu both work.
- **Map:** the dealers section embeds OpenStreetMap centered on ул. Большая Конюшенная, 19/8, Санкт-Петербург. It loads when your machine has internet access.
- **Assets used:** `logo.png`, `can.png`, `cat-after.png` (slim example cat, cut out from your `after.png`), `cat-example.png` (hero background cat), `icon-slim.png`, `icon-pro.png`, plus a generated `map.png`.
- **Before / after:** the БЫЛО / СТАЛО control is a real wipe — drag it to slide the divider across the cat (color on the БЫЛО side, desaturated on the СТАЛО side).
