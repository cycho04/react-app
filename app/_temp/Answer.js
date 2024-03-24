import React from 'react';
import FixTeenDeyValue from './FixTeenDeyValue';
import './fade.css'


const Answer = (props) =>{
    return (
        <h1 className={props.cards ? 'fadeIn' : 'fadeOut'} align='center'>{props.show ? FixTeenDeyValue(props.hand[0], props.hand[1]) + '/' + FixTeenDeyValue(props.hand[2], props.hand[3]) : 'Press New Hand to Start'}</h1>
    );
}

export default Answer;