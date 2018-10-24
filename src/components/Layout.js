import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
import Footer from "./Footer";
import Header from "./Header";
import logo from '../logo.svg'; //add my own logo later
import {tilesSet} from './TilesSet';
import '../Layout.css';
import TilesHand from './Hand.js';
import Buttons from './Buttons';


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hand1: '',
      hand2: '',
      hand3: '',
      hand4: ''
    };
  }


  assignHands() {
    let tempArr = ["", "", "", ""];
    let counter = "";
    let newSet = [];
    //loops through and assigns random tile from deck
    let newArr = tempArr.map((el) => {
      newSet = tilesSet.filter((tile) => tile !== tilesSet[counter]);
      counter = Math.floor(Math.random()* newSet.length);
      console.log(counter);
      return newSet[counter];
    })
    console.log(newArr);
    
    this.setState((state) => {
      return {
        hand1: newArr[0],
        hand2: newArr[1],
        hand3: newArr[2],
        hand4: newArr[3]
      }; 
    })
  }

  render() {
    return (
      <div>
        <TilesHand 
          img1={this.state.hand1.img}
          img2={this.state.hand2.img} 
          img3={this.state.hand3.img} 
          img4={this.state.hand4.img}
        />
        <Buttons assignHands={this.assignHands.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
