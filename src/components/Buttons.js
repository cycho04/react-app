import React from 'react';

const Buttons = (props) =>{
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={props.handleHW}>House-way</button>
            <button type="button" className="btn btn-dark" onClick={props.handleClick}>New Hand</button>
        </div>
    );
}

export default Buttons;