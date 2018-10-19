import React, { Component } from 'react';

export default class TilesHand extends Component {
    render(){
        return(
            <div>
                <img src={this.props.tile} alt="no picture"></img>
                <img src={this.props.tile} alt="no picture"></img>
                <img src={this.props.tile} alt="no picture"></img>
                <img src={this.props.tile} alt="no picture"></img>
            </div> 
        );
    }
}