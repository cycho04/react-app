import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
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

