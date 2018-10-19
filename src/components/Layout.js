import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
import Footer from "./Footer";
import Header from "./Header";
import logo from '../logo.svg'; //add my own logo later
import {tilesSet} from './TilesSet';
import TileImg from './imgs/Dey1.jpeg'
import '../Layout.css';
import TilesHand from './Hand';
import Buttons from './Buttons';


export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Chris",
      tile: tilesSet[0].img
    };
  }



  changeName(name) {
    this.setState({name});
  }


  render() {
    // const tile = tilesSet[0];
    return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
        <TilesHand tile={this.state.tile}/>
        <Buttons />
        <Footer />
      </div>
    );
  }
}
