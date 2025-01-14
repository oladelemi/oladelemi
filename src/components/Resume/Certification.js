import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certification/Certificate';

const Certification = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((degree) => (
      <Certificate data={degree} key={degree.school} />
    ))}
  </div>
);

Certification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
};

Certification.defaultProps = {
  data: [],
};

export default Certification;
