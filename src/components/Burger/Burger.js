import React from 'react';
import burgerCss from './Burger.module.css';
import BurgerIngredient from './Ingredient/Ingredient';

const burger = props => {

    let arrayIngredients = Object.keys(props.ingredients)
    .map((igKeys, i) => {
        return [...Array(props.ingredients[igKeys])].map((_, i) => {
            return <BurgerIngredient key={igKeys + i} type={igKeys} />
        })
    }).reduce((arr, el) => {
        return (arr.concat(el))
    }, [])

    if (arrayIngredients.length === 0) {
        arrayIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <div className={burgerCss.Burger}>
            <BurgerIngredient type="bread-top" />
            {arrayIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;