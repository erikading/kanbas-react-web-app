import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import '../../Modules/index.css';
import './index.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container">
        <h2>Assignment Name</h2>
        <input value={assignment.title}
            className="form-control mb-2" />
        <textarea id="wd-assignment-desc" className="form-control">This is the assignment description.</textarea>
        
        <div className="row mt-2">
            <div className="col-3">
                <label for="points" className="float-end">Points</label>
            </div>
            <div className="col">
                <input type="number" className="form-control" id="points" value="100" />
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row mt-2">
            <div className="col-3">
                <label for="assignment-group" className="float-end">Assignment Group</label>
            </div>
            <div className="col">
                <select className="form-select" id="assignment-group">
                    <option>ASSIGNMENTS</option>
                </select>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row mt-2">
            <div className="col-3">
                <label for="display-grade" className="float-end">Display Grade</label>
            </div>
            <div className="col">
                <select id="display-grade" className="form-select">
                    <option>Percentage</option>
                </select>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row mt-2">
            <div className="col-3">
            </div>
            <div className="col">
                <div className="wd-flex-row">
                    <input type="checkbox" className="form-check me-2" /><span>Do not count this assignment towards the final grade</span>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row mt-2 wd-row-submission-type wd-align-items-start">
            <div className="col-3">
                <label for="submission-type" className="float-end">Submission Type</label>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <select className="form-select" id="submission-type">
                            <option>Online</option>
                        </select>

                        <div className="row">
                            <label for="check-online-entry-options wd-font-bold" className="form-check mt-2">
                                <span className="wd-font-bold">Online Entry Options</span>
                            </label>
                        </div>
                        <div className="row">
                            <div className="wd-flex-row">
                                <input type="checkbox" className="form-check me-2" value="TEXTENTRY" 
                                name="check-online-entry-options" id="text-entry" checked/>
                                <label for="text-entry">Text Entry</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wd-flex-row">
                                <input type="checkbox" className="form-check me-2" value="WEBSITEURL" 
                                name="check-online-entry-options" id="website-url" checked />
                                <label for="website-url">Website URL</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wd-flex-row">
                                <input type="checkbox" className="form-check me-2" value="MEDIARECORDINGS"
                                name="check-online-entry-options" id="media-recordings" checked />
                                <label for="media-recordings">Media Recordings</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wd-flex-row">
                                <input type="checkbox" className="form-check me-2" value="STUDENTANNOTATION" 
                                name="check-online-entry-options" id="student-annotation" />
                                <label for="student-annotation">Student Annotation</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wd-flex-row">
                                <input type="checkbox" className="form-check me-2" value="FILEUPLOADS" 
                                name="check-online-entry-options" id="file-uploads" />
                                <label for="file-uploads">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        <div className="row mt-2 wd-row-assign wd-align-items-start">
            <div className="col-3">
                <label for="assign-to" className="float-end">Assign</label>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <label for="assign-to" className="wd-font-bold">Assign to</label>
                        </div>
                        <div className="row">
                            <div className="card">
                                <span className="badge wd-badge w-25 my-1 mx-1">
                                    <span>Everyone</span>
                                    <button type="button" className="close wd-badge" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <label for="due" className="wd-font-bold">Due</label>
                        </div>
                        <div className="row">
                            <input type="date" className="form-control" id="due" value="2023-18-09" />
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="available-from" className="wd-font-bold my-2">Available from</label>
                            </div>
                            <div className="col">
                                <label for="until" className="wd-font-bold my-2">Until</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="date" className="form-control" id="available-from" value="2023-06-09" />
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" id="until" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        
        <div className="wd-flex-row-reverse mt-2">
            <button onClick={handleSave} className="btn btn-danger me-2">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light">
                Cancel
            </Link>
        </div>
    </div>
  );
}


export default AssignmentEditor;