// SchoolList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolList.css';

const schoolsData = [
  { id: 1, name: 'School 1' },
  { id: 2, name: 'School 2' },
  { id: 3, name: 'School 3' },
  { id: 4, name: 'School 4' },
  { id: 5, name: 'School 5' },
  { id: 6, name: 'School 6' },
  { id: 7, name: 'School 7' },
  { id: 8, name: 'School 8' },
  { id: 9, name: 'School 9' },
  { id: 10, name: 'School 10' },
  { id: 11, name: 'School 11' },
  { id: 12, name: 'School 12' },
  // Add data for other schools
];

const SchoolList = () => {
  return (
    <div className="school-list">
      <h1>Schools</h1>
      <div className="school-cards">
        {schoolsData.map(school => (
          <div className="school-card" key={school.id}>
            <Link to={`/schools/${school.id}`}>
              <h2>{school.name}</h2>
              {/* Add more details for each card if needed */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;
