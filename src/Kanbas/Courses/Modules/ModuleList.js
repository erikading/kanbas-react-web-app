import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import './index.css';
import { findModulesForCourse } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    useEffect(() => {
      findModulesForCourse(courseId)
        .then((modules) =>
          dispatch(setModules(modules))
      );
    }, [courseId]);
    const handleAddModule = () => {
      client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
      });
    };
    const handleDeleteModule = (moduleId) => {
      client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
      });
    };
    const handleUpdateModule = async () => {
      const status = await client.updateModule(module);
      dispatch(updateModule(module));
    };

    return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="wd-flex-row">
            <input className="form-control me-2"
            value={module.name}
            onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
            }/>
            <button className="btn btn-success me-1"
                onClick={handleAddModule}>
                Add
                </button>
            <button className="btn btn-primary"
                onClick={handleUpdateModule}>
                Update
            </button>
        </div>
        <textarea className="form-control mt-2"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="wd-flex-row wd-space-between">
                <h3>{module.name}</h3>
                <div>
                    <button className="btn btn-warning me-1"
                    onClick={() => {
                      dispatch(setModule(module));
                    }}>
                    Edit
                    </button>
                    <button className="btn btn-danger"
                    onClick={() => handleDeleteModule(module._id)}>
                    Delete
                    </button>
                </div>
            </div>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
    );
}
export default ModuleList;