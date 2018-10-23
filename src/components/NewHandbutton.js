import React, { Component } from 'react';
import { newHand } from './utils.js'
import {tilesSet} from './TilesSet';
import Buttons from './Buttons';



export default class NHbutton extends Component {

    render(){
        return(
            <span>
                <button type="button" className="btn btn-dark" onClick={this.props.assignHands}>New Hand</button>
            </span> 
        );
    }
}