import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

/* TODO - to be added to display pdf in browser later
    <object data="/Documents/PdfResume.pdf" type="application/pdf" width="300" height="200">
           <a href ="/Documents/PdfResume.pdf" download className="button">Download Resume</a>
          </object>
          */


const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/abdulateef.jpg`} alt="Abdulateef" />
      </Link>
      <header>
        <h2>Abdulateef Oladelemi</h2>
        <p><a href="mailto:oladelemia@gmail.com">oladelemia@gmail.com</a></p>
      </header>
    </section>

    
    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I'm Abdulateef. Welcome to my personal Website.</p>
      <ul className="actions">
        <li>
          <ul>{window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </ul>

          <ul>{ <a href ="/Documents/PdfResume.pdf" target="_blank" className="button" >Download Resume</a>}</ul>
          
        
        </li>
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
      <p className="copyright">&copy; Abdulateef Oladelemi <Link to="/">oladelemi.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
