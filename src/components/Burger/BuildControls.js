import React from 'react';

import myCss from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const buildControls = props => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
    return (
        <div className={myCss.BuildControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
            {controls.map(ctrl => {
               return ( 

                   <BuildControl 
                        key={ctrl.label}   
                        label={ctrl.label} 
                        added={() => props.addedIngredient(ctrl.type)} 
                        deleted={() => props.deletedIngredient(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
               )
            })}
            <button className={myCss.OrderButton} disabled={!props.purchasable} onClick={props.orderClick}>CHECKOUT</button>
        </div>
    )
}

export default buildControls;