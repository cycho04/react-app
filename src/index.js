import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min'; //need for bootstrap to work properly.
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; //placed after bootstrap import to override with our css.
import Layout from './components/Layout';
import FrontPage from './components/FrontPage';
import Rules from './components/Rules';
import NotFound from  './components/NotFound';


const Routing = (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to='/'>Front</Link>
                </li>
                <li>
                    <Link to='/game'>Home</Link>
                </li>
                <li>
                    <Link to='/rules'>Rules</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/'component={FrontPage}/>
                <Route path='/game'component={Layout}/>
                <Route path='/rules' component={Rules}/>
                <Route component={NotFound}/>    
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(Routing, document.getElementById('root'));

