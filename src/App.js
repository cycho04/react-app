//not connected to project


import React, { Component } from 'react';

export default class App extends Component {
    render(){
        return(
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
        )
    }
}