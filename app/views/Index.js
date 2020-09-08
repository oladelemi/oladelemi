import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">WELCOME !</Link></h2>
          <p>Welcome to my personal Website </p>
        </div>
      </header>
      <p> Beware, this area contains a lot of facts, thoughts, ideas and developments
        biased to my own reasoning. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/Works">Works</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      </article>
  </Main>
);

export default Index;
