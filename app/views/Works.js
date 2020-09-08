import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Works/Cell';
import data from '../data/Works';

const Works = () => (
  <Main>
    <Helmet title="Works" />
    <article className="post" id="Works">
      <header>
        <div className="title">
          <h2><Link to="/Works">Works</Link></h2>
          <p>This is a collection of my most recent projects. Well, usually the ones i'm proud of :)</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Works;
