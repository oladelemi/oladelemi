import React from 'react';
import { Link } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const { toPDF, targetRef } = usePDF({
    filename: 'Abdulateef_Oladelemi_Resume.pdf',
    page: { format: 'letter', orientation: 'portrait' },
    method: 'save',
  });

  const handleDownloadResume = () => {
    toPDF();
  };

  // Pass targetRef to window object so Resume component can access it
  React.useEffect(() => {
    window.resumeTargetRef = targetRef;
    return () => {
      delete window.resumeTargetRef;
    };
  }, [targetRef]);

  return (
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
        {window.location.pathname.includes('/resume') && (
          <ul className="actions">
            <li>
              <button type="button" onClick={handleDownloadResume} className="button">Download Resume</button>
            </li>
          </ul>
        )}
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Abdulateef Oladelemi <Link to="/">oladelemi.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
