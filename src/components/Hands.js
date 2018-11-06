import React from 'react';
import './Hands.css';

const Hands = (props) =>{
    return (
        <div>
            <img className={props.cards ? 'cards2' : 'cards'} src={props.hand1} alt={props.hand1}></img>
            <img className={props.cards ? 'cards2' : 'cards'} src={props.hand2} alt={props.hand2}></img>
            <img className={props.cards ? 'cards2' : 'cards'} src={props.hand3} alt={props.hand3}></img>
            <img className={props.cards ? 'cards2' : 'cards'} src={props.hand4} alt={props.hand4}></img>
        </div>
    );
}

export default Hands;