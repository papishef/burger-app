import React from 'react';
import myInputCss from './Input.module.css'

const Input = props => {

    let inputElement = null;
    const inputClasses = [myInputCss.InputElement]
    let validationError = '';

    
        if (props.invalid && props.shouldValidate && props.touched) {
            inputClasses.push(myInputCss.Invalid)
            validationError = <p className={myInputCss.ErrorMessage}>valid {props.propname} required</p>
        }
   
    switch (props.elementtype) {
        case ('input'):
            inputElement = <div>
                {validationError}
                <input className={inputClasses.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed} />
                
            </div>
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <select className={myInputCss.InputElement} value={props.value} onChange={props.changed} >
                                {
                                    props.elementconfig.options.map(option => {
                                        return(
                                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                                        )
                                    })
                                }
                            </select>
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed} />
    }

    return (
        <div className={myInputCss.Input}>
            <label className={myInputCss.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default Input;