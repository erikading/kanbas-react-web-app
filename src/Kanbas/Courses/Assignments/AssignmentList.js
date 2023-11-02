import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer.js";
function AssignmentList() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateAssignment(assignment))}>
          Update
        </button>
        <input
          value={assignment.name}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }/>
      </li>
      {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <li key={index} className="list-group-item">
            <h4>{assignment.title}</h4>
            <button
              onClick={() => dispatch(selectAssignment(assignment))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteAssignment(assignment._id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default AssignmentList;