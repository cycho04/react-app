import React, { Component } from 'react';

import {tilesSet} from './TilesSet';
import '../Layout.css';
import Hands from './Hands'
import Buttons from './Buttons';


export default class Layout extends Component {
  constructor(props) {
    console.log("starting up");
    super(props);
    //each hand holds a randomly generated tile object from { tilesSet }
    this.state = {
      //needs empty spots for when rendering on <Hands hand1={this.state.hand[0].img} /> else error since hand[0] doesnt exist.
      hand: ["", "", "", ""],
      cards: false
    };
    //binding in the constructor is recommended for performance.
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
    this.assignHands = this.assignHands.bind(this);
    this.baccaratCount = this.baccaratCount.bind(this);
  }


  baccaratCount = (n, m) => {
    let number = n + m;
    if (number >= 10 && number < 20){
      if (number >= 20) {
        return number -= 20;
      }
        return number -= 10;
    }
      return number;
  }

  //generates new hand and updates them to state.
  assignHands() {
    let tempArr = [0, 0, 0, 0]; //filler array
    let testArr = tilesSet.slice(); //filler array. tilesSet is untouched
    //loops through and assigns random tile from deck
    let newArr = tempArr.map((x) => {
      let counter = Math.floor(Math.random()* (testArr.length - 1));
      //used to hold the selected obj. needed since splice changes arr.length and we splice/display the different indexes.
      let dummyArr = testArr[counter];
      testArr.splice(counter, 1);
      return dummyArr;
    })
    //updates state
    this.setState({
        hand: [newArr[0], newArr[1], newArr[2], newArr[3]]
    })
  }

  //toggle effect.
  handleToggle() {
    this.setState({
        cards: !this.state.cards
    })
  }

  handleClick = () => {
    this.assignHands();
  }

  handleHW(){
    console.log(this.state.hand);
  }

  render() {
    return (
      <div>
        <h2>{this.baccaratCount(this.state.hand[0].val, this.state.hand[1].val)} / {this.baccaratCount(this.state.hand[2].val, this.state.hand[3].val)}</h2>
        <Hands 
          cards={this.state.cards}
          hand1={this.state.hand[0].img}
          hand2={this.state.hand[1].img}
          hand3={this.state.hand[2].img}
          hand4={this.state.hand[3].img} 
        />
        <Buttons 
          type="button" 
          className="btn btn-dark" 
          handleClick={this.handleClick} 
          handleHW={this.handleHW}
          hand={this.state.hand}
          baccaratCount={this.baccaratCount}
        />
      </div>
    );
  }
}
