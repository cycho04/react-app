//not connected to project
import React, { Component } from 'react';

export default class App extends Component {
    render(){
        return(
            <div>
                {/* <div className='test navbar'>
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
                </Switch> */}
                Herro
            </div>
        )
    }
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Route, Link, BrowserRouter, Switch, NavLink } from 'react-router-dom';
// import './index.css';
// import Layout from './components/Layout';
// import FrontPage from './components/FrontPage';
// import Rules from './components/Rules';
// import NotFound from  './components/NotFound';
// import NotFinished from './components/NotFinished';

// import { TransitionGroup, CSSTransition } from "react-transition-group";

// const style = {
//     style:{
//         fontWeight: 'bold',
//         border: 'solid 3px',  
//         color: '#262626',
//         padding: '10px',
//         marginLeft: '10px',
//         marginRight: '10px',  
//         backgroundColor: 'gray',
//         borderRadius: '5px',
//         textDecoration: 'none',
//         boxShadow: '2px 2px 2px 2px #324774'
        
//     }
// }

// const style2 = {  
//     padding: '10px',
//     backgroundColor: '#262626',
//     color: 'grey',
//     borderRadius: '5px'
// }

// const Routing = (
//     <BrowserRouter>
//         <div>
//             <div className='test navbar'>
//                 <span className='left'>
//                     <NavLink style={style.style} activeStyle={style2} to="/lotuslodi">LOTUS - LODI</NavLink>
//                     <NavLink style={style.style} activeStyle={style2} to="/palace">PALACE</NavLink>
//                     <NavLink style={style.style} activeStyle={style2} to="/bike">BIKE</NavLink>   
//                 </span>
//                 <span className='right'>
//                     <NavLink style={style.style} activeStyle={style2} to="/rules">RULES</NavLink>    
//                 </span>
//             </div>
//             <Switch>
//                 <Route exact path='/'component={FrontPage}/>
//                 <Route path='/lotuslodi'component={Layout}/>
//                 <Route path='/palace'component={NotFinished}/>
//                 <Route path='/bike'component={NotFinished}/>
//                 <Route path='/rules' component={Rules}/>
//                 <Route component={NotFound}/>    
//             </Switch>    
//         </div>
//     </BrowserRouter>
// )

// ReactDOM.render(Routing, document.getElementById('root'));
