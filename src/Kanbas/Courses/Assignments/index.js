import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import AssignmentList from "./AssignmentList";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="container">
        <div class="d-flex flex-row wd-justify-content-inbetween">
            <input type="text" class="form-control w-25" placeholder="Search for Assignments"/>
            <div>
                <button type="button" class="btn btn-light ms-1 float-end">
                </button>
                <button type="button" class="btn btn-danger ms-1 float-end">
                    Assignment
                </button>
                <button type="button" class="btn btn-light ms-1 float-end">
                    Group
                </button>
            </div>
        </div>

        <hr />

      <div className="list-group wd-assignments">
        <div className="list-group-item wd-assignments-title">
            <span>Assignments for course {courseId}</span>
        </div>

        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-assignments">
            <span>{assignment.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;