# MelodyHub

A React + Vite music app built for performance and modern deployment.

## Tech stack

- React 19
- Vite
- ESLint
- React Icons

## Project setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This creates a production-ready `dist` directory.

## Deployment

### Vercel

1. Connect your GitHub repository.
2. Set the root directory to `/`.
3. Use the build command:

```bash
npm run build
```

4. Set the publish directory to `dist`.

### Netlify

1. Connect your GitHub repository.
2. Configure deploy settings:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### GitHub Pages

This repository is also configured to deploy automatically to GitHub Pages using GitHub Actions. After pushing to `master`, the workflow will build and publish the `dist` folder to the `gh-pages` branch.

If your repository is public, the site can be available at:

```
https://umairkonduru263-bot.github.io/MelodyHub/
```

No environment variables are needed for the current static app.

## Final checklist

- [x] `npm install`
- [x] `npm run build`
- [x] `dist` created successfully
- [x] `.gitignore` configured for `node_modules` and `dist`
- [x] `vercel.json` and `netlify.toml` added

## Notes

If you add a backend later, use Render or Railway for server deployment and MongoDB Atlas for the database.
