import { useLocation } from "react-router-dom";
import './index.css';

function Breadcrumbs() {
    const { pathname } = useLocation();
    let pathnameArray = decodeURI(pathname).split('/');
    let pathStart = pathnameArray.splice(0, 3).join('/');
    let lastCrumb = pathnameArray.pop();

    return (
        <nav>
            <ol className="breadcrumb">
                {pathnameArray.map(function(crumb, index) {
                    let path = '#' + pathStart;
                    for (let i = 0; i < index; i++) {
                        path += '/' + pathnameArray[i];
                    } 
                    path += '/' + crumb;

                    return (
                        <li className="breadcrumb-item">
                            <a className="wd-red-crumb-link" href={path}>
                                {crumb}
                            </a>
                        </li>
                    );
                })}
                <li className="breadcrumb-item active" aria-current="page">{lastCrumb}</li>
            </ol>
        </nav>
    );
}
export default Breadcrumbs;