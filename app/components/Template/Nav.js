import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/abdulateef.jpg`} alt="Abdulateef" />
      </Link>
      <header>
        <h2>Abdulateef Oladele</h2>
        <p><a href="mailto:oladelemia@gmail.com">oladelemia@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abdulateef. Welcome to my personal Website.</p>
      <ul className="actions">
        <li>
          <ul>{window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </ul>

          
          <ul>{window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Download Resume</Link> : <Link to="/about" className="button">Download Resume</Link>}
        </ul></li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Abdulateef Oladele <Link to="/">oladelemi.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
