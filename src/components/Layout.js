import React, { Component } from 'react';

import {tilesSet} from './TilesSet';
import '../Layout.css';
import { houseWay } from './utils.js';
import Hands from './Hands'

export default class Layout extends Component {
  constructor(props) {
    console.log("starting up");
    super(props);
    this.assignHands = this.assignHands.bind(this);
    //each hand holds a randomly generated tile object from { tilesSet }
    this.state = {
      hand1: '',
      hand2: '',
      hand3: '',
      hand4: '',
      cards: false,
      hand: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHW = this.handleHW.bind(this);
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
        hand1: newArr[0],
        hand2: newArr[1],
        hand3: newArr[2],
        hand4: newArr[3],
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

  componentDidMount(){
    console.log("mounted");
  }
  shouldComponentUpdate(x, y){
    console.log("updating...");
    if(this.state.hand !== y.hand1){
      this.setState({
      hand: y.hand1
      })
      console.log(this.state.hand1);
    }
    return true;
  }
  componentDidUpdate(x, y){
    console.log("updated");

  }

  componentWillUnmount(){
    console.log("unmounting");
  }

  handleHW(){
    console.log(this.state.hand);
  }

  render() {
    return (
      <div>
        <Hands test="testing"/>
        <div>
          <img className={this.state.cards ? 'cards2' : 'cards'} src={this.state.hand1.img} alt={this.state.hand1.img}></img>
          <img className={this.state.cards ? 'cards2' : 'cards'} src={this.state.hand2.img} alt={this.state.hand2.img}></img>
          <img className={this.state.cards ? 'cards2' : 'cards'} src={this.state.hand3.img} alt={this.state.hand3.img}></img>
          <img className={this.state.cards ? 'cards2' : 'cards'} src={this.state.hand4.img} alt={this.state.hand4.img}></img>
        </div> 
        
        <button type="button" className="btn btn-dark" onClick={this.handleHW}>House-way</button>
        <button type="button" className="btn btn-dark" onClick={this.handleClick}>New Hand</button>
      </div>
    );
  }
}
