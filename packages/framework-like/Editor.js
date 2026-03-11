import React, { Suspense, lazy } from 'react';

const EditorLoader = lazy(() => import('./EditorLoader.js'));
const DiffEditorLoader = lazy(() => import('./DiffEditorLoader.js'));

export function Editor() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'loading editor...') },
    React.createElement(EditorLoader),
    React.createElement(DiffEditorLoader)
  );
}
