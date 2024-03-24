import React, { Component } from 'react';
import {tilesSet} from './TilesSet'; // array of 32 'tile' objects.
import '../Layout.css';
//components
import Hands from './Hands'
import Buttons from './Buttons';
import Input from './Input';
import Features from './Features';
import Answer from './Answer';
//functions
import Exceptions from './Exceptions';
import AssignHands from './AssignHands'
import Compare from './Compare';
import Split from './Split';
import CheckBabies from './CheckBabies'
import CheckGeeJoon from './CheckGJ';
import BaccaratCount from './BaccaratCount';


import '../index.css';


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //needs empty spots for when (mounting) <Hands hand1={this.state.hand[0].img} /> else error since hand[0] doesnt exist.
      start: true,
      hand: ["", "", "", ""],
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
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
    this.handleAssignHands = this.handleAssignHands.bind(this);
    this.checkPair = this.checkPair.bind(this);
    this.checkTeenDey = this.checkTeenDey.bind(this);
    this.hiLowMiddle = this.hiLowMiddle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userInput1 = this.userInput1.bind(this);
    this.userInput2 = this.userInput2.bind(this);
    this.userInput3 = this.userInput3.bind(this);
    this.userInput4 = this.userInput4.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.handleExceptions = this.handleExceptions.bind(this);
    this.handleBabies = this.handleBabies.bind(this);
    this.determineGeeJoon = this.determineGeeJoon.bind(this);
    this.sook = this.sook.bind(this);
    this.checkStart = this.checkStart.bind(this);
  };

  checkStart(start){
    if(this.state.start){
      this.setState(() => ({start: false}));
    }
  }

  determineGeeJoon(hand){
    let newArr = CheckGeeJoon(hand);
    //true if there is geejoon, else false
    if(newArr !== false){
      this.setState(() => ({hand: newArr}));
    }
  }

  //move to another file.
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
            let handAndRule = Split(pairTL, otherTL);//imported, returns an array of [0] = the hand reformated to split or not split [1]= string of rule used .eg 'split'
            this.setState(() => ({hand: handAndRule[0], rule: handAndRule[1]}));
            return true;
          }
          //pairs that don't split
          else {
            let copyArr = otherTL.concat(pairTL); //concats the two small arrays together and renders.
            this.setState(() => ({hand: copyArr, pairName: pairTL[0].name, rule: 'Don\'t Split'}));
            return true;
          }
        }
      }
    }
    return false; //no pairs
  };
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
  hiLowMiddle(hand){
    //makes a new copy of hand and sorts it using sort()'s point system.
    let sortedArr = hand.slice().sort(Compare); //Compare() is imported.  slice used, else mutates hand.
    let tempHair = [sortedArr[0], sortedArr[3]];
    let tempBack = [sortedArr[1], sortedArr[2]];
    let hiLow = tempHair.concat(tempBack); //newly sorted arr
    this.setState(() => ({hand: hiLow, rule: 'Hi-Low-Middle'}));
  };
  //updates state and changes hands.
  inputClick(){
    let first = tilesSet.filter((x) => x.name === this.state.input1);
    let second = tilesSet.filter((x) => x.name === this.state.input2);
    let third = tilesSet.filter((x) => x.name === this.state.input3);
    let fourth = tilesSet.filter((x) => x.name === this.state.input4);
    let newArr = [first[0], second[0], third[0], fourth[0]];
    this.setState(() => ({hand: newArr, history: [...this.state.history, [...newArr]], show: true}));
  };
  
  handleBabies = (hand) => {
    let temp = CheckBabies(hand);
    if(temp.length === 4){
      this.setState(() => ({hand: temp, rule: 'babies?'}));
      return true;
    }
    else{
      return false;
    }
  }

  handleExceptions(hand){
    let whichOne = Exceptions(hand);//imported
    //
    if (whichOne !== false){
      this.setState(() => ({hand: whichOne, rule: 'exceptions'}));
      return true;
    }
    else{
      return false;
    }
  }

  //generates new hand and updates them to state.
  handleAssignHands() {
    let tempArr = AssignHands(); //imported, returns a randomly generated hand.
    this.setState({hand: [tempArr[0], tempArr[1], tempArr[2], tempArr[3]], show: true, history: [...this.state.history, [...tempArr]]});
  };
  
  handleSubmit = (e) => {
    this.checkStart(this.state.hand);
    e.preventDefault();
  };

  //toggle effect.
  handleToggle = () => {
    this.setState(() => ({cards: !this.state.cards}));
  };

  handleClick = () => {
    this.checkStart(this.state.start);
    this.handleAssignHands();  
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
    this.determineGeeJoon(this.state.hand);  
                   // 0)Determines GeeJoon Value
                   // 1)
                   // 2)
                   // 3)
                   // 4)
                   // 5)
    if(!this.checkPair(this.state.hand)){                   // 1)Checks for pairs
      if(!this.handleExceptions(this.state.hand)){          // 2)If no pairs, checks for Exceptions
        if(!this.checkTeenDey(this.state.hand)){            // 3)If no exceptions, checks for Teen or Dey
          if(!this.handleBabies(this.state.hand)){          // 4)If no Teen or Dey, checks for babies/3 big tiles
            this.hiLowMiddle(this.state.hand);              // 5)Lastly, sets hand using high low middle. 
          }
        }  
      }
    }
    // this.sook(this.state.hand);
  };

  sook(hand){
    let low = BaccaratCount(hand[0], hand[1]);
    let high = BaccaratCount(hand[2], hand[3]);
    console.log(low, high);
    if (low <= 3 || high <= 3){
      let combo1 = BaccaratCount(hand[0], hand[2]);
      let combo2 = BaccaratCount(hand[0], hand[3]);
      let combo3 = BaccaratCount(hand[1], hand[2]);
      let combo4 = BaccaratCount(hand[1], hand[3]);
      if(combo1 > high && combo1 >= 7){
        this.setState(() => ({rule: '02'}))
      }
      if(combo2 > high && combo2 >= 7){
        this.setState(() => ({rule: '03'}))
      }
      if(combo3 > high && combo3 >= 7){
        this.setState(() => ({rule: '12'}))
      }
      if(combo4 > high && combo4 >= 7){
        this.setState(() => ({rule: '13'}))
      }
    }
  }

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



  render() {
    const style = {
      style:{
        fontWeight: 'bold', 
        borderColor: 'white', 
        color: 'white',
        padding: '10px',  
        backgroundColor: '#314570',
        borderRadius: '5px',
        textDecoration: 'none',
        margin: '20px 10px',
        boxShadow: '2px 2px 2px 2px #444444',
        outline: 'none'
      }
    }
    return (
      <div>
        <Answer 
          cards={this.state.cards}
          show={this.state.show}
          hand={this.state.hand}
        />
        
        <Hands 
          start={this.state.start}
          hand1={this.state.hand[0].img}
          hand2={this.state.hand[1].img}
          hand3={this.state.hand[2].img}
          hand4={this.state.hand[3].img} 
        />
        
        <Input 
          start={this.state.start}
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
          start={this.state.start}
          handleClick={this.handleClick} 
          handleHW={this.handleHW}
          hand={this.state.hand}
        />

        <div className='center'>
          <button style={style.style} onClick={this.handleToggle}>{this.state.cards ? 'Hide All' : 'Show All'}</button>  
        </div>

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
