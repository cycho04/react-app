import React from 'react';

const Buttons = (props) =>{
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={props.handleHW}>House-way</button>
            <button type="button" className="btn btn-dark" onClick={props.handleClick}>New Hand</button>
            <p>the value of the 1st tile is: {props.hand[0].val}</p>
            <p>the value of the 2nd tile is: {props.hand[1].val}</p>
            <p>the value of the 3rd tile is: {props.hand[2].val}</p>
            <p>the value of the 4th tile is: {props.hand[3].val}</p>
            <p>Hair: {props.baccaratCount(props.hand[0].val, props.hand[1].val)}</p>
            <p>Back: {props.baccaratCount(props.hand[2].val, props.hand[3].val)}</p>
        </div>
    );
}

export default Buttons;