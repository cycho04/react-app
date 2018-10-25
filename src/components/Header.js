import React, { Component } from 'react';

import Title from "./Header/Title";

export default class Header extends Component {
    handleChange(e) {
        const name = e.target.value; 
        this.props.changeName(name);
    }
    render() {
      return (
        <div>
            <Title name={this.props.name}/>
            <input onChange={this.handleChange.bind(this)}/> 
        </div>
      );
    }
  }