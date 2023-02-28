import axios from '../../../axios-orders'
import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import withRouter from '../../../hoc/withRouter/withRouter';
import Spinner from '../../../components/UI/Spinner/Spinner';
import myCss from './ContactForm.module.css';
import Input from '../../../components/UI/Input/Input'


const breadPrice = 4; 

class ContactForm extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Delivery address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Contact number'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 11,
                    minLength: 7
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest Delivery'},
                        {value: 'cheapest', displayValue: 'Cheapest Delivery'}
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },  
            notes: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Notes'
                },
                value: '',
                validation: {
                    required: false,
                },
                valid: true,
                touched: false
            }    
        },
        ingredients: {},
        totalPrice: 0,
        loading: false
    }

    componentDidMount() {
        let saladPrice= 0.3;
        let cheesePrice =  0.5;
        let meatPrice =  0.7;
        let baconPrice =  0.58
        const inheritedState = this.props.router.location.state
        let ingredientsPrice = 0

        baconPrice *= inheritedState.bacon
        saladPrice *= inheritedState.salad
        cheesePrice *= inheritedState.cheese
        meatPrice *= inheritedState.bacon

        ingredientsPrice = breadPrice + baconPrice + saladPrice + cheesePrice + meatPrice
 
        this.setState({ingredients: this.props.router.location.state, totalPrice: ingredientsPrice})
        
    }

    // componentDidUpdate() {
    //     console.log(this.state.totalPrice)
    // }


    submitFormHandler = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        const formData = {};
        for (let formIdentifier in this.state.orderForm) {
            formData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }

        const order = {
            ingredients: this.state.ingredients,
            orderData: formData,
            totalPrice: this.state.totalPrice
        }
        axios.post('/orders.json', order)
            .then(response => {
                
                alert(response.status);
                this.setState({loading: false})
                this.props.router.navigate('/orders');
            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            })
        
    }

    checkValidity (value, rule) {
        let isValid = true;

        if (rule.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rule.minLength) {
            isValid = value.length >= rule.minLength && isValid
        }

        if (rule.maxLength) {
            isValid = value.length <= rule.maxLength && isValid
        }

        return isValid
    }

    onInputChangeHandler = (e, identifierElement) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updateFormElement = {
            ...updatedOrderForm[identifierElement]
        }

        updateFormElement.value = e.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation)
        updateFormElement.touched = true
        updatedOrderForm[identifierElement] = updateFormElement;
        console.log(updateFormElement.touched);
        this.setState({orderForm: updatedOrderForm})
    }

    render() {

        let orderFormChain = this.state.orderForm
        //HOW TO CONVERT OBJECT TO ARRAY
        let formArray = []
        for (let key in orderFormChain) {
            formArray.push({
                id: key,
                config: orderFormChain[key]
            })
        }
        let form = (
            
            <form onSubmit={(e) => this.submitFormHandler(e)}>
                <div>
                    {
                       formArray.map(formArrayElement => {
                          return(
                            <Input 
                                key={formArrayElement.id}
                                elementtype={formArrayElement.config.elementType}
                                elementconfig={formArrayElement.config.elementConfig}
                                value={formArrayElement.config.value}
                                shouldValidate={formArrayElement.config.validation.required}
                                invalid={!formArrayElement.config.valid}
                                changed={(e) => this.onInputChangeHandler(e, formArrayElement.id)}
                                touched={formArrayElement.config.touched}
                                propname={formArrayElement.id}
                           />
                          )
                       }) 
                    }

                </div>
                <Button btnType='Success' type='submit'>ORDER</Button>
            </form>)

            if(this.state.loading) {
                form = <Spinner />
            }
        return (
            <div className={myCss.ContactForm}>
                <h2>Please enter Delivery Details</h2>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactForm);