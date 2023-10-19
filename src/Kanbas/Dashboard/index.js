import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import lilypad from '../../Images/lilypads.jpg';
import cherryblossoms from '../../Images/cherry-blossoms.jpg';
import greenery from '../../Images/greenery.jpg';

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
        <div className="wd-top-nav-bar">
            <div className="wd-flex-top-container wd-flex-row">
                <h1 className="wd-heading-text">Dashboard</h1>
            </div>
            <hr/>
            <div className="wd-top-nav-bar wd-flex-top-container wd-flex-row">
                <h2 className="wd-secondary-text">Published Courses (7)</h2>
            </div>
            <hr />
        </div>
      
      <div className="list-group wd-card-container">
        {courses.map(function(course) {

            return (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item wd-card">
            <img className="card-img-top" src={course.imagePath}/>
            <div className="wd-card-content">
                {course.number} {course.name}<br />
                {course.startDate}-{course.endDate}
            </div>
          </Link>
          )
        })}
      </div>
    </div>
  );
}
export default Dashboard;