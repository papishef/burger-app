import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle';

import myCss from './Toolbar.module.css'


const Toolbar = props => {

    return(
        <header className={myCss.Toolbar}>
            <DrawerToggle openDrawer={props.openDrawer} />
            <Logo height="85%" />
            <nav className={myCss.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;