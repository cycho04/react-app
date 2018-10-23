import React, { Component } from 'react';
import HWbutton from './HWbutton';
import NHbutton from './NewHandbutton';

export default class Buttons extends Component {
    render(){
        return(
            <div>
                <HWbutton />
                <NHbutton assignHands={this.props.assignHands}/>
            </div> 
        );
    }
}