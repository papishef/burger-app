import React from 'react';
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'
import myCss from './checkoutSummary.module.css'

const CheckoutSummary = props => {

    return (
        <div className={myCss.checkoutSummary}>
            <h1>Your Burger!!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.leaveCheckout}>CANCEL</Button>
            {!props.dataFormVisibility ?  <Button btnType='Success' clicked={props.showDataForm}>CONTINUE</Button> : null}

        </div>
    )
}

export default CheckoutSummary;