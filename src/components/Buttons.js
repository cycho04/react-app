import React from 'react';

const Buttons = (props) =>{
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={props.handleHW}>House-way</button>
            <button type="button" className="btn btn-dark" onClick={props.handleClick}>New Hand</button>
            <h2>Value of tiles: {props.hand[0].val ? props.hand[0].val : "0"} - {props.hand[1].val ? props.hand[1].val : "0"} - {props.hand[2].val ? props.hand[2].val : "0"} - {props.hand[3].val ? props.hand[3].val : "0"}</h2>
        </div>
    );
}

export default Buttons;