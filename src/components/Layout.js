import React, { Component } from 'react';

import {tilesSet} from './TilesSet';
import '../Layout.css';
import Hands from './Hands'
import Buttons from './Buttons';
import Input from './Input';
import Features from './Features';
import Answer from './Answer';


export default class Layout extends Component {
  constructor(props) {
    console.log("starting up");
    super(props);
    //each hand holds a randomly generated tile object from { tilesSet }
    this.state = {
      //needs empty spots for when (mounting) <Hands hand1={this.state.hand[0].img} /> else error since hand[0] doesnt exist.
      hand: ["", "", "", ""],
      exceptions: [],
      cards: false,
      pairName: '',
      rule: '',
      show: false,
      history: [],
      input1: 'GJ3',
      input2: 'GJ6',
      input3: 'teen',
      input4: 'teen'
    };
    //binding in the constructor is recommended for performance.
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
    this.assignHands = this.assignHands.bind(this);
    this.checkPair = this.checkPair.bind(this);
    this.checkTeenDey = this.checkTeenDey.bind(this);
    this.hiLowMiddle = this.hiLowMiddle.bind(this);
    this.compare = this.compare.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userInput1 = this.userInput1.bind(this);
    this.userInput2 = this.userInput2.bind(this);
    this.userInput3 = this.userInput3.bind(this);
    this.userInput4 = this.userInput4.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.baccaratCount = this.baccaratCount.bind(this);
    this.fixTeenDeyValue = this.fixTeenDeyValue.bind(this);
    this.exceptions = this.exceptions.bind(this);
  };

  //generates new hand and updates them to state.
  assignHands() {
    let tempArr = [0, 0, 0, 0]; //filler array
    let testArr = tilesSet.slice(); //filler array. tilesSet is untouched
    //loops through and assigns random tile from deck
    let newArr = tempArr.map((x) => {
      let counter = Math.floor(Math.random()* (testArr.length));
      //used to hold the selected obj. needed since splice changes arr.length and we splice/display the different indexes.
      let dummyArr = testArr[counter];
      testArr.splice(counter, 1);
      return dummyArr;
    })
    //updates state
    this.setState({hand: [newArr[0], newArr[1], newArr[2], newArr[3]], show: true, history: [...this.state.history, [...newArr]]});
  };

  //handles bacc counts, as well as gong, wong, and pair
  baccaratCount = (n, m) => {
    //recognizing gong , wong , or pair...
    let number = n.val + m.val;
    if(n.rank === m.rank){
      return 'Pair';
    }
    else if (n.val === 2 || m.val === 2){
      if (number === 10){
        return 80;// so that gong will be higher than 9
      }
      else if (number === 11){
        return 90; // same for wong.
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
  };

  //checks for pairs. takes an array as arg
  checkPair(hand){
    //maybe add a pair check func before the loop, to avoid unnecessary looping.
    for(let i = 0; i < hand.length; i++) {
      for (let ii = 0; ii < hand.length; ii++) {
        // if there is a pair and it is not comparing to itself.
        if (hand[i].pair === hand[ii].pair && i !== ii) {
          let pairTL = hand.filter((x) => x.rank === hand[i].rank); //array of the pair tiles
          let otherTL = hand.filter((x) => x.rank !== hand[i].rank); // array of the other 2 tiles. use these two arr to move tiles accordingly
          //if pair has split rules...
          if (hand[i].split !== false) {
            this.split(pairTL, otherTL);//handles split rules.
            return true;
          }
          //pairs that don't split
          else {
            let copyArr = otherTL.concat(pairTL); //concats the two small arrays together and renders.
            this.setState(() => ({hand: copyArr, pairName: pairTL[0].name, rule: 'Don\'t Split'}))
            return true;
          }
        }
      }
    }
    return false; //no pairs
  };

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
        let without7 = tempArr.filter((el) => el.name !== seven.name); 
        let sevenAndTeenOrDey = [tile, seven];
        let newHand = sevenAndTeenOrDey.concat(without7);
        this.setState(() => ({hand: newHand, rule: 'Teen/Dey'}));
        return true;   
      }
      else if(eight){
        let without8 = tempArr.filter((el) => el.name !== eight.name); 
        let eightAndTeenOrDey = [tile, eight];
        let newHand = eightAndTeenOrDey.concat(without8);
        this.setState(() => ({hand: newHand, rule: 'Teen/Dey'}));
        return true;
      }
      else if(nine){
        let without9 = tempArr.filter((el) => el.name !== nine.name); 
        let nineAndTeenOrDey = [tile, nine];
        let newHand = nineAndTeenOrDey.concat(without9);
        this.setState(() => ({hand: newHand, rule: 'Teen/Dey'}));
        return true;
      }
    }
    // no teen or dey...
    else{
      return false;
    }
  };

  //point system used for sort() in hiLowMiddle()
  compare(a,b){
    let comparison = 0;//no change
    if(a.realValue < b.realValue){
      comparison = -1;//a comes before b
    }
    else if(a.realValue > b.realValue){
      comparison = 1;//b comes before a
    }
    return comparison;
  };

  exceptions(hand){
    //redo
    return false
  }

  // used in Answers.js. used to control the value being displayed. used to change value of gong/wong
  fixTeenDeyValue = (hand1, hand2) =>{
    const hand = this.baccaratCount(hand1, hand2);
    if(hand === 80){
        return 'Gong';
    }
    else if(hand === 90){
        return 'Wong';
    }
    else {
      return hand;
    }
  }

  //will not execute if there is a teen dey...
  hiLowMiddle(hand){
    //makes a new copy of hand and sorts it using sort()'s point system.
    let sortedArr = hand.slice().sort(this.compare); //slice used, else mutates hand.
    let tempHair = [sortedArr[0], sortedArr[3]];
    let tempBack = [sortedArr[1], sortedArr[2]];
    let hiLow = tempHair.concat(tempBack); //newly sorted arr
    this.setState(() => ({hand: hiLow, rule: 'Hi-Low-Middle'}));
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
  };

  //toggle effect.
  handleToggle = () => {
    this.setState(() => ({cards: !this.state.cards}));
  };

  handleClick = () => {
    this.assignHands();  
    //works, but not 100% properly. the changes are one step behind. fix async.
    //check to see the history length. max set @ 10
    if(this.state.history.length >= 10){
      let temp = this.state.history.slice();
      temp.shift();
      this.setState(() => ({history: temp}))
    }
  };

  //House Way
  handleHW(){
    if(!this.checkPair(this.state.hand)){
      if(!this.exceptions(this.state.hand)){
        if(!this.checkTeenDey(this.state.hand)){
          this.hiLowMiddle(this.state.hand);
        }  
      }
    }
  };

  //used for dropdown options. One per card.
  userInput1(e){
    this.setState({input1: e.target.value});
  };
  userInput2(e){
    this.setState({input2: e.target.value})
  };
  userInput3(e){
    this.setState({input3: e.target.value})
  };
  userInput4(e){
    this.setState({input4: e.target.value})
  };

  //n = pairTL, n2 = otherTL
  split(n, n2){
    const combo1 = this.baccaratCount(n2[0], n[0]);
    const combo2 = this.baccaratCount(n2[1], n[1]);
    let dontSplitArr = n.concat(n2);
    let splitArr = [n[0], n2[0], n[1], n2[1]];

    //Gee Joon
    if (n[0].pair === 1) {
      //if it meets the split requirements...
      if((combo1 >= 7 && combo2 >= 9) || (combo1 >= 9 && combo2 >= 7)){
        this.setState(() => ({hand: splitArr, rule: 'pairs'}));
      } 
      else {
        this.setState(() => ({hand: dontSplitArr, rule: 'pairs'}));
      }
      return true;
    }

    //TeenDey
    else if(n[0].pair === 2){
      //if it splits to make 6/8 or better
      if((combo1 >= 6 && combo2 >= 8) || (combo1 >= 8 && combo2 >= 6)){
        this.setState(() => ({hand: splitArr, rule: 'pairs'}));
      }
      else if((n2[0].val === 9 && n2[1].val === 1) || (n2[0].val === 1 && n2[1].val === 9)){
        this.setState(() => ({hand: splitArr, rule: 'pair'}));
      }
      else{
        this.setState(() => ({hand: dontSplitArr, rule: 'pairs'}));
      }
      return true;
    }

    //all other pairs(needs work on recognizing teen dey)
    else {
      if(combo1 >= n[0].split && combo2 >= n[0].split){
        //checks for gong/wong
        if((n2[0].val === 2 && combo2 >= n[0].split) || (n2[1].val === 2 && combo1 >= n[0].split)){
          this.setState(() => ({hand: splitArr, rule: 'split'}));
        }
        else {
          this.setState(() => ({hand: splitArr, rule: 'split'}));
        }
      }
      else {
        this.setState(() => ({hand: dontSplitArr, rule: 'pairs'}));
      }
      return true;
    }
  }

  //updates state and changes hands.
  inputClick(){
    let first = tilesSet.filter((x) => x.name === this.state.input1);
    let second = tilesSet.filter((x) => x.name === this.state.input2);
    let third = tilesSet.filter((x) => x.name === this.state.input3);
    let fourth = tilesSet.filter((x) => x.name === this.state.input4);
    let newArr = [first[0], second[0], third[0], fourth[0]];
    this.setState(() => ({hand: newArr, history: [...this.state.history, [...newArr]], show: true}));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Easy Mode</button>
        <Answer 
          cards={this.state.cards}
          show={this.state.show}
          baccaratCount={this.baccaratCount}
          hand={this.state.hand}
          fixTeenDeyValue={this.fixTeenDeyValue}
        />
        
        <Hands 
          hand1={this.state.hand[0].img}
          hand2={this.state.hand[1].img}
          hand3={this.state.hand[2].img}
          hand4={this.state.hand[3].img} 
        />
        
        <Input 
          handleSubmit={this.handleSubmit}
          userInput1={this.userInput1}
          userInput2={this.userInput2}
          userInput3={this.userInput3}
          userInput4={this.userInput4}
          inputClick={this.inputClick}
          input1={this.state.input1} 
          input2={this.state.input2} 
          input3={this.state.input3} 
          input4={this.state.input4} 
        />

        <Buttons 
          type="button" 
          className="btn btn-dark" 
          handleClick={this.handleClick} 
          handleHW={this.handleHW}
          hand={this.state.hand}
        />

        <Features 
          hand={this.state.hand}
          pairName={this.state.pairName}
          rule={this.state.rule}
          history={this.state.history}
          cards={this.state.cards}
        />
      </div>
    );
  };
};
