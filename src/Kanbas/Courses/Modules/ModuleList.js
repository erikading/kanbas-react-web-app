import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    // const getCardId = (index) => "heading" + index;
    // const getDataTarget = (index) => "#" + index;

    // let state = 'collapse';
    // const getState = state;
    // function handleToggle(s) {
    //     if (s === 'collapse') {
    //         state = 'show';
    //     } else {
    //         state = 'collapse';
    //     }
    // }

    return (
        // <div id="accordion">
        //     {
        //     modules
        //         .filter((module) => module.course === courseId)
        //         .map((module, index, state) => (
        //         <div key={index} className="card">
        //             <div className="card-header" id={getCardId(index)}>
        //                 <h5 className="mb-0">
        //                     <button onClick={handleToggle(getState)} className="btn btn-link" data-toggle={getState} data-target={getDataTarget(index)} aria-expanded="false" aria-controls={index}>
        //                         <h3>{module.name}</h3>
        //                     </button>
        //                 </h5>
        //             </div>
        //             <div id={index} className={getState} aria-labelledby={getCardId(index)} data-parent="#accordion">
        //                 <div className="card-body">
        //                     <p>{module.description}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     ))
        //     }
        // </div>
        
        <div className="wd-width-100">
            <div className="wd-flex-row-reverse wd-width-100">
                <button type="button" className="btn btn-danger ms-1">Module</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Publish All
                    </button>
                    </div>
                <button type="button" className="btn btn-secondary ms-1">View Progress</button>
                <button type="button" className="btn btn-secondary ms-1">Collapse All</button>
            </div>
            <ul className="list-group list-group-item-secondary wd-module">
            {
            modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                <li key={index} className="list-group-item wd-module wd-center">
                    <h6>{module.name}</h6>
                    <p>{module.description}</p>
                </li>
            ))
            }
            </ul>
        </div>
    );
}
export default ModuleList;