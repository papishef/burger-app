import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import myCss from './NavigationItems.module.css'

const NavigationItems = props => {
    return(
        <ul className={myCss.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems;