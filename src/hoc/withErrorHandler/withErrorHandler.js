import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {


    return class extends Component {

        constructor (props) {
            super(props);
            this.state = {
                error: null
            }
        }

        componentDidMount () {
            this.reqInterceptor = axios.interceptors.request.use(reqConfig => {
                this.setState({error: null})
                return reqConfig;
            })
            this.resInterceptor = axios.interceptors.response.use(responseConfig => responseConfig, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render () {
            return (
                <Wrapper>
                    <Modal show={this.state.error} hide={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            )
        }
    }
}

export default withErrorHandler;