import { Link, useLocation } from "react-router-dom";
import './index.css';
import {FaUser, 
    FaTachometerAlt, 
    FaBookOpen,
    FaCalendarAlt,
    FaInbox,
    FaRegClock,
    FaTv,
    FaArrowRight,
    FaRegQuestionCircle} from 'react-icons/fa';
import nuIcon from '../../Images/nu-logo.png';

function KanbasNavigation() {
    const icons = [FaUser, FaTachometerAlt, FaBookOpen, FaCalendarAlt, FaInbox, FaRegClock, FaTv, FaArrowRight, FaRegQuestionCircle];
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-menu">
            <img className="wd-menu-item wd-nu-logo" src={nuIcon}/>
        {links.map(function(link, index) {

            const Icon = icons[index];

            let iconClass = "wd-kanbas-icon";

            if (link === 'Account') {
                iconClass = "wd-account-icon";
            }

            return (
            <div>
                <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item wd-menu-item wd-center ${pathname.includes(link) && "active wd-menu-item-active"}`}>
                <div>
                    <Icon className={iconClass}/>
                </div>

                <div className="wd-kanbas-link">{link}</div>
                </Link>
            </div>)
            
            })}
        </div>
    );
}
export default KanbasNavigation;