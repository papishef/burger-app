import React from 'react';
import ingredientCss from './Ingredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={ingredientCss.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={ingredientCss.BreadTop}>
                    <div className={ingredientCss.Seeds1}></div>
                    <div className={ingredientCss.Seeds2}></div>
                </div>
            )
            break;
        case ('meat'):
            ingredient = <div className={ingredientCss.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={ingredientCss.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={ingredientCss.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={ingredientCss.Bacon}></div>;
            break;

        default:
            ingredient = null;
            break;
    }

    return ingredient;

}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;