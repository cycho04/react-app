import React, { Component } from 'react';
import { houseWay } from './utils.js';

export default class HWbutton extends Component {
    render(){
        return(
            <span>
                <button type="button" className="btn btn-dark" onClick={houseWay}>House-way</button>
            </span> 
        );
    }
}