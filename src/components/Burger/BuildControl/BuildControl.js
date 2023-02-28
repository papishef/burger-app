import React from "react";

import buildControlCss from './BuildControl.module.css'

const buildControl = props => {
    
    


    return (
        <div className={buildControlCss.BuildControl}>
            <div className={buildControlCss.Label}>{props.label}</div>
            <button className={buildControlCss.Less} onClick={props.deleted} disabled={props.disabled}>Less</button>
            <button className={buildControlCss.More} onClick={props.added}>More</button>
            
        </div>
    )
}

export default buildControl;