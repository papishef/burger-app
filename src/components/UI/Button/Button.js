import React from 'react';
import myCss from './Button.module.css'

const Button = props => {
    let button = <button className={[myCss.Button, myCss[props.btnType]].join(' ')} onClick={props.clicked} type={props.type ? props.type : null}>{props.children}</button>
    if (props.type) {
        button = <button className={[myCss.Button, myCss.Success2, myCss[props.btnType]].join(' ')} onClick={props.clicked} type={props.type ? props.type : null}>{props.children}</button>
    }
    return (
        button
    )
}

export default Button;