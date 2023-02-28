import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return <li key={igKeys}><span style={{textTransform: 'capitalize', fontWeight: 700}}>{igKeys} - </span>{props.ingredients[igKeys]}</li>;
        })

    return(
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with your chosen recipes</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Will you like to continue?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.completePurchase}>CONTINUE</Button>
        </Wrapper>
    )
}

export default OrderSummary;