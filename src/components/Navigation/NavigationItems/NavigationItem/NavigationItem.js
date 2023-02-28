import React from 'react';
import myCss from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom';

const  NavigationItem = props => {
    return(
        <li className={myCss.NavigationItem}>
            <NavLink 
                to={props.link} 
                exact={props.exact}
                activeClassName='active'>                
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;