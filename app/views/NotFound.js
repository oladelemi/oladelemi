import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="Page Not Found" />
    <h1>Welp, That page is not yet available.</h1>
    <p>Return to <Link to="/">Homepage</Link>.</p>
  </div>
);

export default PageNotFound;
