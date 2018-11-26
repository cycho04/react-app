import React from 'react';
import './fade.css';

import Button from '@material-ui/core/Button';

const Buttons = (props) =>{
    return (
        <div align='center'>
            <Button variant='contained' color='primary' onClick={props.handleHW}>House-way</Button>
            <Button variant='contained' color='primary' onClick={props.handleClick}>New Hand</Button>
        </div>
    );
}

export default Buttons;