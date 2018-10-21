import React, { Component } from 'react';
import { test } from './utils.js';

export default class HWbutton extends Component {
    render(){
        return(
            <span>
                <button type="button" class="btn btn-dark" onClick={test}>House-way</button>
            </span> 
        );
    }
}