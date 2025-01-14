import React from 'react';
import PropTypes from 'prop-types';

import Award from './Awards/Award';

const getRows = (courses) => courses
  .sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
  })
  .map((course, idx) => (
    <Award
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

const Awards = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Awards & Recognitions</h3>
    </div>
    <ul className="course-list">{getRows(data)}</ul>
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
