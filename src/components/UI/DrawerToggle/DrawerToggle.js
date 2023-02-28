import React from 'react';

import myCss from './DrawerToggle.module.css';

const drawerToggle = props => {

    return (
        <div className={myCss.DrawerToggle} onClick={props.openDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToggle;