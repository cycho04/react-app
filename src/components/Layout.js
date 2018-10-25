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
    //each hand holds a randomly generated tile object from { tilesSet }
    this.state = {
      hand1: '',
      hand2: '',
      hand3: '',
      hand4: ''
    };
  }

  //generates new hand and updates them to state.
  assignHands() {
    let tempArr = [0, 0, 0, 0]; //filler array
    let testArr = tilesSet; //filler array. tilesSet is untouched.
    console.log(testArr);
    console.log(tilesSet);
    //loops through and assigns random tile from deck
    let newArr = tempArr.map((x) => {
      console.log(tempArr.length);
      let counter = Math.floor(Math.random()* (testArr.length - 1));
      testArr.splice(counter, 1);

      return testArr[counter];
    })
    //updates state
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
