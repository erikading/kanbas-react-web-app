import './index.css';
// import lilypad from '../../Images/lilypads.jpg';
// import cherryblossoms from '../../Images/cherry-blossoms.jpg';
// import greenery from '../../Images/greenery.jpg';
import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="wd-left-80">
      <div className="wd-top-nav-bar">
             <div className="wd-flex-top-container wd-flex-row">
                 <h1 className="wd-heading-text">Dashboard</h1>
             </div>
             <hr/>
             <div className="wd-top-nav-bar wd-flex-top-container wd-flex-row">
                 <h2 className="wd-secondary-text">Course</h2>
             </div>
             <hr />
         </div>
      <div className="wd-left-20">
        <div className="wd-flex-row mb-2">
          <input value={course.name} className="form-control me-1"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control me-1"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control me-1" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control me-1" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          <button className="btn btn-success me-1" onClick={addNewCourse} >
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse} >
            Update
          </button>
        </div>

        <div className="list-group">
          {courses.map((course) => (
            <Link key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="list-group-item wd-list-item wd-space-between">
                    {course.name}
                  <div>
                    <button className="btn btn-warning me-1"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                    </button>
                    <button className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                    </button>
                  </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
