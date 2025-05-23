import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Certification from '../components/Resume/Certification';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Awards from '../components/Resume/Awards';
import References from '../components/Resume/References';

import awards from '../data/resume/awards';
import degrees from '../data/resume/degrees';
import certificates from '../data/resume/certificates';
import work from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Certifications: () => <Certification data={certificates} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Awards: () => <Awards data={awards} />,
  References: () => <References />,
};

const Resume = () => {
  const [targetRef, setTargetRef] = React.useState(null);

  React.useEffect(() => {
    if (window.resumeTargetRef) {
      setTargetRef(window.resumeTargetRef);
    }
  }, []);

  return (
    <Main
      title="Resume"
      description="Abdulateef Oladelemi's Resume. Software Engineer, SHRM Certified HR professional Artificial Intelligence Engineer."
    >
      <article className="post" id="resume" ref={targetRef}>
        <header>
          <div className="title">
            <h2>
              <Link to="resume">Resume</Link>
            </h2>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </article>
    </Main>
  );
};

export default Resume;
