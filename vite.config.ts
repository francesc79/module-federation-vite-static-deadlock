import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import federationOptions from './vite.modulefederation.config';

export default defineConfig(async () => {
  const { federation } = await import('@module-federation/vite');

  return {
    base: './',
    plugins: [react(), federation(federationOptions)]
  };
});
