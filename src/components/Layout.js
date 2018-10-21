import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
import Footer from "./Footer";
import Header from "./Header";
import logo from '../logo.svg'; //add my own logo later
import {tilesSet} from './TilesSet';
import TileImg from './imgs/Dey1.jpeg'
import '../Layout.css';
import TilesHand from './Hand.js';
import Buttons from './Buttons';


export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Chris",
      tile: tilesSet[0].img,
      hand1: "",
      hand2: "",
      hand3: "",
      hand4: ""
    };
  }

  changeName(name) {
    this.setState({name});
  }


  newHand(deck) {
    deck.forEach(element => {
      let index = Math.floor(Math.random()* deck.length); 
      //changes the src to a random tiles src from imgs folder  
      // cards[i].src = deck[index].img;
      this.setState({hand1: deck[index]});
      //used to reset hand array after separating into low and high.
      // masterHand.push(hand[i]);
      // splices the selected array, so there won't be the same 4 tiles. always a new tile.
      deck.splice(index, 1);
    });

  }

  render() {
    return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
        <TilesHand />
        <Buttons />
        <Footer />
        {this.newHand(tilesSet)}
        <p>{this.state.hand1.img}</p>
      </div>
    );
  }
}
