import React, { Component } from 'react';


export default class Nhbutton extends Component {
    handleClick() {
        console.log('clicked');
    }

    render(){
        return(
            <span>
                <button type="button" class="btn btn-dark" onClick={(e) => this.handleClick(e)}>New Hand</button>
            </span> 
        );
    }
}