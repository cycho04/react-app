import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import FrontPage from './components/FrontPage';
import Rules from './components/Rules';
import NotFound from  './components/NotFound';

import Button from '@material-ui/core/Button';

const Routing = (
    <BrowserRouter>
        <div>
            <div className='test'>
                <Button component={Link} to="/" className='sizing'>Casino</Button>
                <Button component={Link} to="/game">Game</Button>
                <Button component={Link} to="/rules">Rules</Button>    
            </div>
            
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

