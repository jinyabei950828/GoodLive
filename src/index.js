import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less'
import './assets/common.less'

import AppRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter />
);
