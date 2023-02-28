import React from 'react';

import myCss from './Backdrop.module.css'

const Backdrop = props => {
    return(
        props.show ? <div className={myCss.Backdrop} onClick={props.hide}></div> : null
    )
}

export default Backdrop;