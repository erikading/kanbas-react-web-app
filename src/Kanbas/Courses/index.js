import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Breadcrumbs from "./Breadcrumbs";
import '../Dashboard/index.css';
import './index.css';
import {FaBars} from 'react-icons/fa'; 
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const { courseId } = useParams();
    const URL = `${process.env.REACT_APP_API_BASE}/courses`;
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
        `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

  return (
    <div className="wd-left-80">
        <div className="wd-flex-top-container wd-width-100 wd-justify-content-center">
            <FaBars className="wd-kanbas-icon"/>
            <Breadcrumbs/>
        </div>
        <hr className="wd-no-margin"/>
        <div className="wd-flex-row">
            <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId"
                        element={<AssignmentEditor/>}/>
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
        </div>
    </div>
  );
}
export default Courses;
