import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/abdulateef.jpg`} alt="" />
      </Link>
      <header>
        <h2>Abdulateef Oladelemi</h2>
        <p>
          <p><a href="mailto:oladelemia@gmail.com">oladelemia@gmail.com</a></p>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abdulateef. Welcome to my personal Website.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
      <a href="/" target="_blank" className="button">Download Resume</a>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Abdulateef Oladelemi <Link to="/">oladelemi.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
