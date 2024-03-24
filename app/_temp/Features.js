import React from 'react';
import './fade.css'

//features information
const Features = (props) =>{
    return (
        <div className={props.cards ? 'fadeIn' : 'fadeOut'} align='center'>
            <h2>Value of tiles: {props.hand[0].val ? props.hand[0].val : "0"} - {props.hand[1].val ? props.hand[1].val : "0"} - {props.hand[2].val ? props.hand[2].val : "0"} - {props.hand[3].val ? props.hand[3].val : "0"}</h2>
            <h2>Pair Name: {props.pairName}</h2>
            <h2>Rule: {props.rule}</h2>
            <h2>History: <div>{props.history.map((el) => <li key={Math.random()}>{el.map((ele) => ele.name+ '--')}</li>)}</div></h2>
        </div>
    );
}

export default Features;