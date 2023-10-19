import ModuleList from "./ModuleList";
import '../../Dashboard/index.css';
import './index.css';
import '../../Courses/index.css';

function Modules() {
  return (
    <div className="wd-flex-column wd-width-100">
      <h2>Modules</h2>
      <ModuleList className="w-75"/>
    </div>
  );
}
export default Modules;