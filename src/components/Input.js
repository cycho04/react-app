import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
    }

    
    render() {
        return(
            <div>
                <form>
                    <label>
                        <input type='text'/>
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )  
    }
}