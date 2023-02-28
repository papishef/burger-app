import React, { Component } from 'react'; 
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import ContactForm from './containers/Checkout/ContactForm/ContactForm';
import Orders from './containers/Orders/Orders';
import { Routes, Route, Navigate } from 'react-router-dom';
import withRouter from './hoc/withRouter/withRouter';

class App extends Component {

  render () {

    return (
        <Layout>
          <Routes>
            <Route path='/orders' element={<Orders />} />
            <Route path='/checkout' element={ <Checkout />} >
              <Route path='contact-data' element={<ContactForm />} />
            </Route>
            
            <Route path='/' 
                   element={<BurgerBuilder />} 
                   exact
            />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Layout>
    )
  }

}

export default withRouter(App);
