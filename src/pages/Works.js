import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Works/Cell';
import data from '../data/works';

const Works = () => (
  <Main title="Works" description="Learn about Abdulateef's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/Works">Works</Link>
          </h2>
          <p>
            This is a collection of my most recent projects. Well, usually the ones
            i&apos;m proud of :)
          </p>
        </div>
      </header>
      {data.map((works) => (
        <Cell data={works} key={works.title} />
      ))}
    </article>
  </Main>
);

export default Works;
