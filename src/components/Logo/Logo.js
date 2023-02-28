import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'

import myCss from './Logo.module.css'

const Logo = (props) => {
    return(
        <div className={myCss.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt='Logo' />
        </div>
    )
}

export default Logo;