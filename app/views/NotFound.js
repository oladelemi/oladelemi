import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="Page Not Found" />
    <img src={`${BASE_PATH}/images/perro.png`}  alt="Doggy"/>
    <h1>Ouuuu! My Dog Already ate this page</h1>
    <p>Return to <Link to="/">Homepage</Link>.</p>
  </div>
);

export default PageNotFound;
