# PharmacyPro

PharmacyPro is a responsive static pharmacy storefront and portfolio demonstration built with HTML, CSS, and vanilla JavaScript.

## Features

- Product catalog with category filtering and search
- Shopping cart, wishlist, checkout, order history, and bill preview using browser local storage
- Responsive navigation and mobile-friendly layout
- Firebase configuration placeholder prepared for optional future authentication and database integration

## Run locally

Because this is a static site, no build step is required. Serve the project directory with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deployment

The project can be deployed directly with GitHub Pages or any static hosting provider. Replace the placeholder values in `js/firebase-config.js` only if Firebase is intentionally configured, and do not commit private credentials.
