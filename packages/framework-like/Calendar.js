import React, { Suspense, lazy } from 'react';

const CalendarLoader = lazy(() => import('./CalendarLoader.js'));

export function Calendar() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'loading calendar...') },
    React.createElement(CalendarLoader)
  );
}
