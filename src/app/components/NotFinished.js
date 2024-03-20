import React from 'react';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {faCogs} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
    faCogs
);

const style = {  
    textAlign: 'center',
    marginTop: '10vh',
    fontSize: '3.0em',
    color: '#262626'
}

const iconStyle = { 
    color: '#262626', 
    marginTop: '200px',
    textAlign: 'center',
    display: 'block',
    width: '100%',
}

const NotFinished = () => {
    return(
        <div>
            <FontAwesomeIcon icon={faCogs} size='9x' style={iconStyle}/>
            <h1 style={style}>Coming Soon!</h1>    
        </div>
    )
}
export default NotFinished;