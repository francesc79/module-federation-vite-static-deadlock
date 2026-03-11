import React, { Suspense, lazy } from 'react';

const TreeLoader = lazy(() => import('./TreeLoader.js'));

export function Tree() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'loading tree...') },
    React.createElement(TreeLoader)
  );
}
