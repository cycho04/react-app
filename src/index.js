import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min'; //need for bootstrap to work properly.
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; //placed after bootstrap import to override with our css.
import Layout from './components/Layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

//http://bit.ly/CRA-PWA
serviceWorker.unregister();
