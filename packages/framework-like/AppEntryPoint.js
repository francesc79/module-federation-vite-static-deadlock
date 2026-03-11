import { configureStore, createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';
import React, { Suspense, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Provider, useSelector } from 'react-redux';
import { HashRouter } from 'react-router';

import { Calendar } from './Calendar.js';
import { DataGrid } from './DataGrid.js';
import { Editor } from './Editor.js';
import { Tree } from './Tree.js';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 'ready'
  },
  reducers: {}
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer
  }
});

void i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        title: 'MF Vite Static Deadlock Repro',
        body: 'If the app bootstraps, this button should work.'
      }
    }
  }
});

function Counter() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const status = useSelector(state => state.app.status);

  return React.createElement(
    'main',
    null,
    React.createElement('h1', null, t('title')),
    React.createElement('p', null, t('body')),
    React.createElement('p', null, `store status: ${status}`),
    React.createElement('button', { onClick: () => setCount(value => value + 1) }, `count: ${count}`),
    React.createElement(
      Suspense,
      { fallback: React.createElement('div', null, 'loading shared loaders...') },
      React.createElement(Calendar),
      React.createElement(Editor),
      React.createElement(DataGrid),
      React.createElement(Tree)
    )
  );
}

export function AppEntryPoint() {
  return React.createElement(
    Provider,
    { store },
    React.createElement(HashRouter, null, React.createElement(Counter))
  );
}

export default AppEntryPoint;
