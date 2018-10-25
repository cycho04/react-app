import React, { Component } from 'react';
import './Hand.css';


export default class TilesHand extends Component {

    render(){
        return(
            <div>
                <img className="cards" src={this.props.img1} alt={this.props.img1}></img>
                <img className="cards" src={this.props.img2} alt={this.props.img2}></img>
                <img className="cards" src={this.props.img3} alt={this.props.img3}></img>
                <img className="cards" src={this.props.img4} alt={this.props.img4}></img>
            </div> 
        );
    }
}