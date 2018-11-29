import React from 'react';

const Hands = (props) =>{

    const style = {
        fontSize: '5.0em'
    }

    return (
        props.start ? <h1 style={style} align='center'>Pai Gow Tiles</h1> : 
            <div align='center'>
                <img src={props.hand1} alt={props.hand1}></img>
                <img src={props.hand2} alt={props.hand2}></img>
                <img src={props.hand3} alt={props.hand3}></img>
                <img src={props.hand4} alt={props.hand4}></img>
            </div>
    );
}

export default Hands;