import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from './Order/Order';

class Orders extends Component {

    state = {
        orders: []
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(orders => {
                // const orderArray = []

                // for (let orderId in orders.data) {
                //     orderArray.push({
                //         key: orderId
                //     })
                // }
                // let cleanedOrderData = {
                //     ingredients: {},
                //     orderData: {},
                //     totalPrice: null
                // }
                // cleanedOrderData.ingredients = {...orders.data.ingredients}
                // cleanedOrderData.orderData = orders.data.orderData
                // cleanedOrderData.totalPrice = orders.data.totalPrice
                // console.log(cleanedOrderData)
                // this.setState({orders: orders.data})
            })
            .catch(error => {
                console.error(error);
                alert(error.message)
            })
    }

    componentDidUpdate() {
        console.log(this.state.orders);
    }

    render() {
        return(
            <div>
                <Order />
            </div>
        )
    }
}

export default Orders;