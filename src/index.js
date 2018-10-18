import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min'; //need for bootstrap to work properly.
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'; //placed under bootstrap import to override with our css.
import Layout from './components/Layout';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
