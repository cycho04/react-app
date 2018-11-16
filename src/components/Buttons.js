import React from 'react';
import './fade.css';

const Buttons = (props) =>{
    return (
        <div align='center'>
            <button type="button" className="btn btn-dark" onClick={props.handleHW}>House-way</button>
            <button type="button" className="btn btn-dark" onClick={props.handleClick}>New Hand</button>
        </div>
    );
}

export default Buttons;