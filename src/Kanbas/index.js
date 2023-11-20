import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import './Dashboard/index.css';
// import './index.css';
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = `${process.env.REACT_APP_API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  const deleteCourse = async (course_id) => {
    const response = await axios.delete(
      `${URL}/${course_id}`
    );
    setCourses(courses.filter((c) => c._id !== course_id));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
  setCourses(
    courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } else {
        return c;
      }
    })
  );
  setCourse({ name: "" });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              />
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
        </Routes>
      </div>
      </div>
    </Provider>
  );
}
export default Kanbas;