import React from 'react';
import './fade.css';

import Button from '@material-ui/core/Button';

const style = {
    buttons: {
        fontWeight: 'bold', 
        borderColor: 'white', 
        color: 'white',
        padding: '10px',  
        backgroundColor: '#314570',
        borderRadius: '5px',
        textDecoration: 'none',
        margin: '20px 10px',
        boxShadow: '2px 2px 2px 2px #444444',
        outline: 'none'
    }
}

const Buttons = (props) =>{
    return (
        //disables HW button until the new hand button is pressed.
        <div align='center'>
            {props.start ? <button style={style.buttons} disabled variant='contained' color='primary' onClick={props.handleHW}>House-way</button> : <button style={style.buttons} variant='contained' color='primary' onClick={props.handleHW}>House-way</button>}
            <button style={style.buttons} variant='contained' color='primary' onClick={props.handleClick}>New Hand</button>
        </div>
    );
}

export default Buttons;