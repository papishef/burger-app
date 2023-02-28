import React from 'react';
import myCss from './Order.module.css';

const Order = props => {

    return(
        <div className={myCss.Order}>
            <p>Ingredients: Salad (1)</p>
            <p>price: <strong>USD5.99</strong></p>
        </div>
    )
}

export default Order;