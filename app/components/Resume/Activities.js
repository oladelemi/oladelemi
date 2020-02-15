import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => (
  <div className="activities">
    <div className="link-to" id="activities" />
    <div className="title">
      <Link to="/contact">
        <h3>Extra curricular activities</h3>
      </Link>
    </div>
  </div>
);

export default Activities;
