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
      pairName: '',
      rule: '',
      show: false,
      history: []
    };
    //binding in the constructor is recommended for performance.
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
    this.assignHands = this.assignHands.bind(this);
    this.baccaratCount = this.baccaratCount.bind(this);
    this.checkPair = this.checkPair.bind(this);
    this.checkTeenDey = this.checkTeenDey.bind(this);
    this.hiLowMiddle = this.hiLowMiddle.bind(this);
    this.compare = this.compare.bind(this);
  }

  baccaratCount = (n, m) => {
    //recognizing gong , wong , or pair...
    let number = n.val + m.val;
    if(n.rank === m.rank){
      return 'Pair';
    }
    else if (n.val === 2 || m.val === 2){
      if (number === 10){
        return "Gong";
      }
      else if (number === 11){
        return 'Wong';
      }
    }
    //regular baccarat counting...
    else if (number >= 10 && number < 20){
      if (number >= 20) {
        return number -= 20;
      }
        return number -= 10;
    }
    //value is under 10, return the sum.
    return number;
  }

  


  // split(n, n2){
  //   //Gee Joon
  //   if (high[0].pair === 1) {
  //     //one of the pair tiles with the other tiles.
  //     var combo1 = baccaratCount(high[0].val[0], low[0].val);
  //     var combo2 = baccaratCount(high[0].val[0], low[1].val);
  //     //if it meets the split requirements...
  //     if((combo1 >= 7 && combo2 >= 9) || (combo1 >= 9 && combo2 >= 7)){
  //       moveTiles("split");
  //       return true;
  //     } else {
  //       moveTiles();
  //       return
  //     }
  //   //Teen/Dey
  //   } else if(high[0].val === 2) {
  //     var combo1 = baccaratCount(high[0].val, low[0].val);
  //     var combo2 = baccaratCount(high[0].val, low[1].val);
  //     //checks if any of the tiles are 7,8, or 9. for 9 gong and wong.
  //     var check7_9 = low[0].val >= 7 && low[0].val <= 9;
  //     var check7_9_2 = low[1].val >= 7 && low[1].val <= 9;
  //     //regular 6-8 split rule.
  //     if((combo1 >= 6 && combo2 >= 8) || (combo1 >= 8 && combo2 >= 6)){
  //       moveTiles("split");
  //       return true;
  //       //we might have 7,8,9 with T/D. (with 8 and 9, it turns to 0 and 1, so we need this part.)
  //     } else if (check7_9 === true || check7_9_2 === true){
  //       //if both are 7,8, or 9
  //       if (check7_9 === check7_9_2){
  //         moveTiles("split");
  //         return true;
  //         //only if 1..
  //       } else if (check7_9 === true && check7_9_2 === false){
  //         if (low[1].val >= 3 && low[1].val <=6){
  //           moveTiles("split");
  //           return true;
  //         } else {
  //           moveTiles();
  //           return true;
  //         }
  //         //if other one...
  //       } else{
  //         if (low[0].val >= 3 && low[0].val <=6){
  //           moveTiles("split");
  //           return true;
  //         } else {
  //           moveTiles();
  //           return true;
  //         }
  //       }
  //     //does not split.
  //     } else {
  //       moveTiles();
  //       return;
  //   }
  //   } else {
  //     // all other pairs. split pairs are in one array with a length of 2. ex: [7, 9]
  //     var combo1 = baccaratCount(high[0].val, low[0].val);
  //     var combo2 = baccaratCount(high[0].val, low[1].val);
  //     if(combo1 >= high[0].split[0] && combo2 >= high[0].split[0]){
  //       moveTiles("split");
  //     } else {
  //       moveTiles();
  //     }
  //     return true;
  //   }
  // }

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
            let tempArr = [pairTL[0], otherTL[0], pairTL[1], otherTL[1]]; // works, but looks messy
            this.setState(() => ({hand: tempArr, pairName: pairTL[0].name, rule: 'Split Pairs'}))
            return true;
          }
          //don't split
          else {
            let copyArr = otherTL.concat(pairTL); //concats the two small arrays together and renders.
            this.setState(() => ({hand: copyArr, pairName: pairTL[0].name, rule: 'Don\'t Split'}))
            return true;
          }
        }
      }
    }
    return false; // no pairs
  }

  //will not execute if there is a pair...(checkPair returns true)
  checkTeenDey(hand){
    //true if we have teen or dey
    let teenDey = hand.find((el) => el.val === 2) !== undefined;
    //if true...
    if(teenDey){
      let tile = hand.find((el) => el.val === 2); // teen/ dey object
      let tempArr = hand.filter((el) => el.name !== tile.name); //new arr without marked teen/dey. arr.length = 3
      let secondTeenDey = tempArr.find((el) => el.val === 2); //second teen/dey (not pair)
      let seven = tempArr.find((el) => el.val === 7);
      let eight = tempArr.find((el) => el.val === 8);
      let nine = tempArr.find((el) => el.val === 9);
      //if there is a second teen/dey
      if (secondTeenDey){
        let twoArr = tempArr.filter((el) => el.name !== secondTeenDey.name);
        console.log(tile, secondTeenDey, twoArr);
        return true;
      }
      //look for 7,8,9
      else if (seven){
        console.log (seven);
        return true;   
      }
      else if(eight){
        return true;
      }
      else if(nine){
        return true;
      }
    }

    // no teen or dey...
    else{
      return false;
    }
  }

  //point system used for sort()
  compare(a,b){
    let comparison = 0;//no change
    if(a.realValue < b.realValue){
      comparison = -1;//a comes before b
    }
    else if(a.realValue > b.realValue){
      comparison = 1;//b comes before a
    }
    return comparison;
  }

  //will not execute if there is a teen dey...
  hiLowMiddle(hand){
    //makes a new copy of hand and sorts it using sort()'s point system.
    let sortedArr = hand.slice().sort(this.compare); //slice used, else mutates hand.
    let tempHair = [sortedArr[0], sortedArr[3]];
    let tempBack = [sortedArr[1], sortedArr[2]];
    let hiLow = tempHair.concat(tempBack); //newly sorted arr
    this.setState(() => ({hand: hiLow, rule: 'Hi-Low-Middle'}));
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
    this.setState({hand: [newArr[0], newArr[1], newArr[2], newArr[3]], show: true, history: [...this.state.history, [...newArr]]})
  }

  //toggle effect.
  handleToggle() {
    this.setState(() => ({cards: !this.state.cards}));
  }

  handleClick = () => {
    this.assignHands();  
    //works, but not 100% properly. the changes are one step behind. fix async.
    //check to see the history length. max set @ 20
    if(this.state.history.length >= 10){
      let temp = this.state.history.slice();
      temp.shift();
      this.setState(() => ({history: temp}))
    }
  }

  //House Way
  handleHW(){
    if(!this.checkPair(this.state.hand)){
      if(!this.checkTeenDey(this.state.hand)){
        this.hiLowMiddle(this.state.hand);
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.show ? <h1>{this.baccaratCount(this.state.hand[0], this.state.hand[1]) + '/' + this.baccaratCount(this.state.hand[2], this.state.hand[3])}</h1> : <h1>Press New Hand to Start</h1>}
        
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

        <h2>Value of tiles: {this.state.hand[0].val ? this.state.hand[0].val : "0"} - {this.state.hand[1].val ? this.state.hand[1].val : "0"} - {this.state.hand[2].val ? this.state.hand[2].val : "0"} - {this.state.hand[3].val ? this.state.hand[3].val : "0"}</h2>
        <h2>Pair Name: {this.state.pairName}</h2>
        <h2>Rule: {this.state.rule}</h2>
        <h2>
          History: <div>{this.state.history.map((el) => <li key={Math.random()}>{el.map((ele) => ele.name+ '--')}</li>)}</div>
          </h2>

      </div>
    );
  }
}
