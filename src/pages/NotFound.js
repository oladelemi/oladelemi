import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const { PUBLIC_URL } = process.env;

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta
          name="description"
          content="page not Found"
        />
      </Helmet>
      <img src={`${PUBLIC_URL}/images/perro.png`} alt="" />
      <h1>Ouuuu! My Dog Already ate this page</h1>
      <p>Return to <Link to="/">Homepage</Link>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
