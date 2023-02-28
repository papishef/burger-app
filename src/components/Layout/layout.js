import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import layoutCss from './layout.module.css';

class Layout extends Component {

    state = {
        sideDrawerOpen: false
    }

    sideDrawerHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    drawerOpenHandler = () => {
        this.setState({sideDrawerOpen: true})
    }

    render() {
        return (
            <Wrapper>    
                <Toolbar openDrawer={this.drawerOpenHandler} />
                <SideDrawer open={this.state.sideDrawerOpen} close={this.sideDrawerHandler} />
                <main className={layoutCss.Content}>{this.props.children}</main>
            </Wrapper>
        )
    }
}

export default Layout;