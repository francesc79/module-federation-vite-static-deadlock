console.info('[repro] entry loaded');

window.addEventListener('error', event => {
  console.error('[repro] window error', event.error ?? event.message);
});

window.addEventListener('unhandledrejection', event => {
  console.error('[repro] unhandled rejection', event.reason);
});

void import('./bootstrap')
  .then(() => {
    console.info('[repro] bootstrap import resolved');
  })
  .catch(error => {
    console.error('[repro] bootstrap import failed', error);
  });
