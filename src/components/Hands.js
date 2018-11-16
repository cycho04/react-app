import React from 'react';

const Hands = (props) =>{
    return (
        <div align='center'>
            <img src={props.hand1} alt={props.hand1}></img>
            <img src={props.hand2} alt={props.hand2}></img>
            <img src={props.hand3} alt={props.hand3}></img>
            <img src={props.hand4} alt={props.hand4}></img>
        </div>
    );
}

export default Hands;