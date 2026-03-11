# module-federation/vite static build deadlock repro

This repro isolates a static build issue after upgrading to:

- `@module-federation/vite@1.12.3`
- `@module-federation/enhanced@2.0.1`

## Expected

After `vite build` and serving `dist`, opening the page should render the React app and the button counter.

## Actual

The page stays on `Loading...`.

Browser console shows:

- `[repro] entry loaded`
- no `[repro] bootstrap module evaluated`
- no `[repro] bootstrap import resolved`
- no rejected promise either

That means the dynamic import of `./bootstrap` stays pending.

## Steps

```bash
pnpm install
pnpm build
pnpm preview
```

Then open the printed URL, usually `http://localhost:3000`.

## Why this repro is useful

The app is intentionally small but shaped like the failing app:

- one app container
- one shared `framework-like` package
- one shared `ui` package with subpath exports
- `runtime: 'enhanced'`
- `manifest: true`
- static preview from built assets

The current build output shows the same structural pattern seen in the failing playground build:

- `remoteEntry.js` imports a chunk that also contains re-exported exposed modules
- that imported chunk eagerly pulls shared `__loadShare__` wrappers for UI subpaths
- `hostInit` preloads `remoteEntry.js` together with that same chunk and shared wrappers

Relevant generated files:

- `dist/remoteEntry.js`
- `dist/assets/hostInit-*.js`
- `dist/assets/TreeLoader-*.js`
- `dist/assets/reproApp__loadShare__*.js`
