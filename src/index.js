import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import ReduxStore from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
        <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


