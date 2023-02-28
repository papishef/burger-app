import React, { Component } from 'react';
import withRouter from '../../hoc/withRouter/withRouter';
import CheckoutSummary from '../../components/Order/checkoutSummary';
import { Outlet } from 'react-router-dom'

class Checkout extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        dataFormVisibility: false
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.router.location.search)
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }

        this.setState({ingredients: ingredients})
    }

    
    leaveCheckoutHandler = () => {
        if(this.state.dataFormVisibility) {
            this.setState({dataFormVisibility: false})
            return this.props.router.navigate(-2)
        }
        this.props.router.navigate(-1)
    }

    showDataFormHandler = () => {
        const query = new URLSearchParams(this.props.router.location.search)
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }

        this.setState({dataFormVisibility: true, ingredients: ingredients})
        this.props.router.navigate(this.props.router.location.pathname + '/contact-data', {
            state: this.state.ingredients
        });
    }

    render () {

        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    leaveCheckout={this.leaveCheckoutHandler} 
                    showDataForm={this.showDataFormHandler} 
                    dataFormVisibility={this.state.dataFormVisibility} />
                <Outlet />
            </div>
        )
    }
}

export default withRouter(Checkout);