import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import {
  ROUTE_BITS,
  ROUTE_WORKFLOWS,
} from '../../config/settings'

import Login from '../Login';
import Navbar from '../Navbar';
import Bits from '../Bits';
import Workflows from '../Workflows';

const Wrapper = styled.div``;
const NavbarWrapper = styled.div``;
const RouteWrapper = styled.div``;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.withNavbar = this.withNavbar.bind(this);
  }

  withNavbar(props, Component) {
    return (
      <Wrapper>
        <NavbarWrapper><Navbar {...props} /></NavbarWrapper>
        <RouteWrapper><Component {...props} /></RouteWrapper>
      </Wrapper>
    )
  }

  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Login} />
          <Route path={`/${ROUTE_BITS}`} render={props => this.withNavbar(props, Bits)} />
          <Route path={`/${ROUTE_WORKFLOWS}`} render={props => this.withNavbar(props, Workflows)} />
        </>
      </Router>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  // authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
