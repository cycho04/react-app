import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import FrontPage from './components/FrontPage';
import Rules from './components/Rules';
import NotFound from  './components/NotFound';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Button from '@material-ui/core/Button';

const Routing = (
    <BrowserRouter>
        <div>
            <div className='test navbar'>
                <Button variant='contained' color='primary' component={Link} to="/lotuslodi">Lotus/Lodi</Button>
                <Button disabled variant='contained' color='primary' component={Link} to="/game">Palace</Button>
                <Button disabled variant='contained' color='primary' component={Link} to="/game">Bike</Button>
                <Button variant='contained' color='primary' component={Link} to="/rules">Rules</Button>    
            </div>
            
            <Switch>
                <Route exact path='/'component={FrontPage}/>
                <Route path='/lotuslodi'component={Layout}/>
                <Route path='/rules' component={Rules}/>
                <Route component={NotFound}/>    
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(Routing, document.getElementById('root'));

