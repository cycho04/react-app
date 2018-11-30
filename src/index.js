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
    style:{
        border: 'white', 
        color: '#314570',
        padding: '10px',
        marginLeft: '10px',
        marginRight: '10px',  
        backgroundColor: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
    }
}

const style2 = {
    fontWeight: 'bold',  
    padding: '10px',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '5px'
}

const Routing = (
    <BrowserRouter>
        <div>
            <div className='test navbar'>
                <NavLink style={style.style} activeStyle={style2} to="/lotuslodi">LOTUS - LODI</NavLink>
                <NavLink style={style.style} activeStyle={style2} to="/palace">PALACE</NavLink>
                <NavLink style={style.style} activeStyle={style2} to="/bike">BIKE</NavLink>
                <NavLink style={style.style} activeStyle={style2} to="/rules">RULES</NavLink>
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

