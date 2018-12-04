import React from 'react';
import './fade.css';

import Button from '@material-ui/core/Button';

const style = {
    buttons: {
        margin: '20px 10px',
        boxShadow: '2px 2px 2px 2px #444444'
    }
}

const Buttons = (props) =>{
    return (
        //disables HW button until the new hand button is pressed.
        <div align='center'>
            {props.start ? <Button style={style.buttons} disabled variant='contained' color='primary' onClick={props.handleHW}>House-way</Button> : <Button style={style.buttons} variant='contained' color='primary' onClick={props.handleHW}>House-way</Button>}
            <Button style={style.buttons} variant='contained' color='primary' onClick={props.handleClick}>New Hand</Button>
        </div>
    );
}

export default Buttons;