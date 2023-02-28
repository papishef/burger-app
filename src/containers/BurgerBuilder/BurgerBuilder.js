import React, { Component } from 'react';
import axios from '../../axios-orders';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import withRouter from '../../hoc/withRouter/withRouter';

const INGREDIENTS_PRICES = {
    salad: 0.3,
    cheese: 0.5,
    meat: 0.7,
    bacon: 0.58
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        ordering: false,
        loading: false,
        error: false,
        showSummary: false
    }

    componentDidMount () {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }
 
 
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKeys => {
                return ingredients[igKeys]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice + INGREDIENTS_PRICES[type]})
        this.updatePurchaseState(updatedIngredients)
    }

    deleteIngredientHandler = type => {    
        const oldCount = this.state.ingredients[type];

        if(oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
    
            updatedIngredients[type] = updatedCount;
            this.setState({ingredients: updatedIngredients, totalPrice: this.state.totalPrice - INGREDIENTS_PRICES[type]})
            this.updatePurchaseState(updatedIngredients)
        }

    }

    orderingHandler = () => {
        this.setState( { ordering: true } )
    }

    purchaseCancelled = () => {
        this.setState( { ordering: false } )
    }

    goToDataFormHandler = () => {
        // this.setState({loading: true})
        // alert('Your order has been placed')
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Papi Shifu",
        //         address: {
        //             street: 'Test Street 1',
        //             zipCode: '420165',
        //             country: 'USA'
        //         }
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders', order)
        //     .then(response => {
        //         this.setState({loading: false, ordering: false})
        //         if(response) {
        //             alert(response.statusText);
        //         }
        //     })
        //     .catch(error => {
        //         this.setState({loading: false, ordering: false})
        //         console.log(error)
        //     });

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        this.props.router.navigate(`/checkout?${queryParams.join('&')}`);
    }


    render () {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let burger = this.state.error ? <p style={{textAlign: 'center', color: 'red'}}>Ingredients can not be loaded, try gain</p> : <Spinner />

        
        let orderSummary = null
        if(this.state.ingredients) {

            burger = (<Wrapper>
                        <Burger ingredients={this.state.ingredients} />
                        <BuildControls 
                            addedIngredient={this.addIngredientHandler} 
                            deletedIngredient={this.deleteIngredientHandler} 
                            disabled={disabledInfo} 
                            purchasable={this.state.purchasable}
                            price={this.state.totalPrice.toFixed(2)}
                            ingredients={this.state.ingredients}
                            orderClick={this.orderingHandler}
                        />
                    </Wrapper>)
                orderSummary = (<OrderSummary 
                    ingredients={this.state.ingredients} 
                    purchaseCancelled={this.purchaseCancelled}
                    completePurchase={this.goToDataFormHandler}
                    showSummaryHandler={this.props.showSummaryHandler}
                />)
        }     

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Wrapper>
                <Modal show={this.state.ordering} hide={this.notOrderingHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Wrapper>
        )
    }
}

export default withErrorHandler(withRouter(BurgerBuilder), axios);