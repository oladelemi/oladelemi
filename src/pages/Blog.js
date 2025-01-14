import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Blog = () => (
  <Main
    title="Stats"
    description="Some statistics about Teef and this webpage"
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2>
            <Link to="/Blog">Blog</Link>
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Blog;
