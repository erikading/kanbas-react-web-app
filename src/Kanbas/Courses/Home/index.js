import ModuleList from "../Modules/ModuleList";
import '../../Dashboard/index.css';
import './index.css';

function Home() {
  return (
    <div className="wd-flex-row wd-width-100 overflow-auto">
        <div className="w-75">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="wd-content-container w-25 d-none d-xl-block">
            <h6>Course Status</h6>
            <button className="btn btn-light mb-2">
                {/* <i className="fa-solid fa-ban"></i> */}
                Unpublish
            </button>
            <button className="btn btn-success mb-2">
                {/* <i className="fa-solid fa-circle-check"></i> */}
                Published
            </button>
            <div className="wd-right-sidebar">
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-file-import"></i> */}
                    Import Existing Content
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-arrow-right-from-bracket"></i> */}
                    Import From Commons
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-crosshairs"></i> */}
                    Choose Home Page
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-chart-simple"></i> */}
                    View Course Stream
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-bullhorn"></i> */}
                    New Announcement
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-solid fa-chart-simple"></i> */}
                    New Analytics
                </button>
                <button className="btn btn-light wd-text-left mb-1">
                    {/* <i className="fa-regular fa-bell"></i> */}
                    View Course Notifications
                </button>
            </div>
            <span className="wd-font-bold">To Do</span>
            <hr className="my-1"/>
            <span className="badge badge-danger wd-color-red">1</span>
            <a className="wd-link my-3" href="#">
                Grade A1 - ENV + HTML</a>
            <h6 className="mt-3">Coming Up</h6>
            <hr className="my-1"/>
            <div className="row">
                <div className="col-1">
                    {/* <i className="fa-regular fa-calendar"></i> */}
                </div>
                <div className="col">
                    <a className="wd-link wd-font-14" href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    {/* <i className="fa-regular fa-calendar"></i> */}
                </div>
                <div className="col">
                    <a className="wd-link wd-font-14" href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                    {/* <i className="fa-regular fa-calendar"></i> */}
                </div>
                <div className="col">
                    <a className="wd-link wd-font-14" href="#">Lecture CS5610 06 SP23 Sep 11 at 6pm</a>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Home;