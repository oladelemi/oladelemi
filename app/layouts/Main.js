import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';
import Footer from "../components/Template/Footer"

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_ID);
}

class Main extends Component {
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
        <div id="main">
          {this.props.children}
          {!this.props.fullPage && <Footer />}
        </div>
        {!this.props.fullPage && <Nav />}
       
      </div>
      );


  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;
