import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Footer from "./Footer";
import Header from "./Header";
import logo from '../logo.svg'; //add my own logo later



export default class Layout extends Component {
  constructor() {
    super();
    this.state = {name: "Chris"};
  }

  changeName(name) {
    this.setState({name});
  }

  render() {
    return (
      <div>
        <Header changeName={this.changeName.bind(this)} name={this.state.name}/>
        <Footer />
      </div>
    );
  }
}
