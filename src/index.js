import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/common.less'
import './assets/css/font.css'
import './assets/css/iconfont.css'

import {Provider} from 'react-redux'
import store from './redux/store'

import './utils/init'

import AppRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
