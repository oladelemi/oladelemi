import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ReactGA from 'react-ga';

import Header from '../components/Template/Header';


if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_ID);
}

class Basic extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: window.location.pathname,
      });
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet titleTemplate="%s | Abdulateef Oladelemi" defaultTitle="Abdulateef Oladelemi" />
        <Header />
        <div id="Basic">
          {this.props.children}
        </div>
      </div>);
  }
}

Basic.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Basic.defaultProps = {
  children: null,
  fullPage: false,
};

export default Basic;
