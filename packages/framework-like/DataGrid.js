import React, { Suspense, lazy } from 'react';

const DataGridLoader = lazy(() => import('./DataGridLoader.js'));

export function DataGrid() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'loading datagrid...') },
    React.createElement(DataGridLoader)
  );
}
