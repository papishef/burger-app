import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import myCss from './Modal.module.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate() {
        console.log('[Modal] updated')
    }

    render() {
        return(
            <Wrapper>
                <Backdrop hide={this.props.hide} show={this.props.show} />
                <div className={myCss.Modal} 
                    style={{transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                            opacity: this.props.show ? '1':'0'
                    }}>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}


export default Modal;