import { type federation } from '@module-federation/vite';

type ModuleFederationOptions = Parameters<typeof federation>[0];

const FEDERATION_OPTIONS: ModuleFederationOptions = {
  name: 'reproApp',
  filename: 'remoteEntry.js',
  manifest: true,
  runtime: 'enhanced',
  shareStrategy: 'version-first',
  getPublicPath: `function () { return './'; }`,
  remotes: {},
  exposes: {
    './App': './src/App.tsx',
    './AppEntryPoint': './src/AppEntryPoint.tsx'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router': { singleton: true },
    i18next: { singleton: true },
    'react-i18next': { singleton: true },
    'react-redux': { singleton: true },
    '@reduxjs/toolkit': { singleton: true },
    '@repro/framework-like': { singleton: true },
    '@repro/ui/calendar': { singleton: true },
    '@repro/ui/chart': { singleton: true },
    '@repro/ui/chatbot': { singleton: true },
    '@repro/ui/editor': { singleton: true },
    '@repro/ui/datagrid': { singleton: true },
    '@repro/ui/diagram': { singleton: true },
    '@repro/ui/scheduler': { singleton: true },
    '@repro/ui/splashscreen': { singleton: true },
    '@repro/ui/tree': { singleton: true },
    '@repro/ui/viewer': { singleton: true },
    '@repro/ui/webcomponents': { singleton: true }
  }
};

export default FEDERATION_OPTIONS;
