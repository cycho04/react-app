import React from 'react';


const Answer = (props) =>{
    return (
        <h1 align='center'>{props.show ? props.fixTeenDeyValue(props.hand[0], props.hand[1]) + '/' + props.fixTeenDeyValue(props.hand[2], props.hand[3]) : 'Press New Hand to Start'}</h1>
    );
}

export default Answer;