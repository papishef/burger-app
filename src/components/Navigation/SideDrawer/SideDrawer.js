import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

import myCss from './SideDrawer.module.css'

const SideDrawer = props => {

    let attachedClassess = [myCss.SideDrawer, myCss.Close]
    if (props.open) {
        attachedClassess = [myCss.SideDrawer, myCss.Open]
    }

    return(
        <Wrapper>
            <Backdrop show={props.open} hide={props.close} />
            <div className={attachedClassess.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    )
}

export default SideDrawer;