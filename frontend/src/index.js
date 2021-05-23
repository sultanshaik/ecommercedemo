import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import axios from 'axios'
import store from './store'


import './styles/index.scss';
import './bootstrap.min.css';
import App from './App';
axios.defaults.baseURL = 'http://localhost:8000/'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
