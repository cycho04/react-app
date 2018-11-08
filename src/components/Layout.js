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
      //needs empty spots for when (mounting) <Hands hand1={this.state.hand[0].img} /> else error since hand[0] doesnt exist.
      hand: ["", "", "", ""],
      cards: false,
      pairName: ''
    };
    //binding in the constructor is recommended for performance.
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
    this.assignHands = this.assignHands.bind(this);
    this.baccaratCount = this.baccaratCount.bind(this);
    this.checkPair = this.checkPair.bind(this);
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

  //checks for pairs. takes an array as arg
  checkPair(hand){
    for(let i = 0; i < hand.length; i++) {
      for (let ii = 0; ii < hand.length; ii++) {
        // if there is a pair and it is not comparing to itself.
        if (hand[i].pair === hand[ii].pair && i !== ii) {
          let pairTL = hand.filter((x) => x.rank === hand[i].rank); //array of the pair tiles
          let otherTL = hand.filter((x) => x.rank !== hand[i].rank); // array of the other 2 tiles. use these two to move tiles accordingly
          //if we split this pair...
          if (hand[i].split !== false) {
            console.log("split pairs")
            let tempArr = [pairTL[0], otherTL[0], pairTL[1], otherTL[1]]; // works, but looks messy
            this.setState(() => ({hand: tempArr, pairName: pairTL[0].name}))
            return true;
          }
          //don't split
          else {
            console.log("don't split");
            let copyArr = otherTL.concat(pairTL); //concats the two small arrays together and renders.
            this.setState(() => ({hand: copyArr, pairName: pairTL[0].name}))
            return true;
          }
        }
      }
    }
    console.log("no pairs");
    return false; // no pairs
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
    this.setState(() => ({cards: !this.state.cards}));
  }

  handleClick = () => {
    this.assignHands();  
  }

  handleHW(){
    this.checkPair(this.state.hand);
  }

  render() {
    return (
      <div>
        <h1>{this.baccaratCount(this.state.hand[0].val, this.state.hand[1].val)} / {this.baccaratCount(this.state.hand[2].val, this.state.hand[3].val)}</h1>
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
        <h2>Pair Name: {this.state.pairName}</h2>
      </div>
    );
  }
}
