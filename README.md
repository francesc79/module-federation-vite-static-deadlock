# module-federation/vite static build repro

This repro highlights a production-build issue around `remoteEntry` chunking and shared eager imports.

It was also tested with PR `#472` via:

- `https://pkg.pr.new/@module-federation/vite@472`

and the generated build still shows the same pattern.

## Run

```bash
pnpm install
pnpm build
pnpm preview
```

Open the printed URL, usually `http://localhost:3000`.

## Expected

The React app should render.

## Actual

In the failing case, the page stays blank or stuck on the initial loading state.

## What to inspect after build

These generated files are the important ones:

- `dist/remoteEntry.js`
- `dist/assets/hostInit-*.js`
- `dist/assets/TreeLoader-*.js`
- `dist/assets/reproApp__loadShare__*.js`

The problematic pattern is:

- `remoteEntry.js` imports a loader-named chunk
- `remoteEntry.js` eagerly imports shared `__loadShare__` wrappers
- `hostInit` preloads `remoteEntry.js`, that same chunk, and the same shared wrappers

So `remoteEntry` is not isolated as a stable runtime entry.
