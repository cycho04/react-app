import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import FrontPage from './components/FrontPage';
import Rules from './components/Rules';
import NotFound from  './components/NotFound';

import { TransitionGroup, CSSTransition } from "react-transition-group";

const style = {
    fontWeight: 'bold', 
    borderStyle: 'solid', 
    padding: '10px'
}

const style2 = {
    fontWeight: 'bold', 
    borderStyle: 'dashed', 
    padding: '10px'
}

const Routing = (
    <BrowserRouter>
        <div>
            <div className='test navbar'>
                <NavLink style={style} activeStyle={style2} to="/lotuslodi">Lotus/Lodi</NavLink>
                <NavLink style={style} to="/game">Palace</NavLink>
                <NavLink style={style} to="/game">Bike</NavLink>
                <NavLink style={style} to="/rules">Rules</NavLink>
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

