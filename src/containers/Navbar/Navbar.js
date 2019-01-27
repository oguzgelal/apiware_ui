import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  ROUTE_BITS,
  ROUTE_WORKFLOWS
} from '../../config/settings'

const Wrapper = styled.div``;

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Link to={`/${ROUTE_BITS}`}>Bits</Link>
        <Link to={`/${ROUTE_WORKFLOWS}`}>Workflows</Link>
      </Wrapper>
    );
  }
}

Navbar.propTypes = {
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
)(Navbar);
