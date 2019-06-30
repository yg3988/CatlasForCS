//node_modules
import React                from 'react';
import { Link }             from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';

//stylesheet
import "./header.css"

const ComponentHeader = ({title}) => {
    return (
        <div>
            <p className="header-title">
                <Link to="/" className="lnk header-lnk-title">{title}</Link>
            </p>
            <input type="checkbox" id="chk"/>
            <label htmlFor="chk" className="header-show-menu-btn">
                <FontAwesomeIcon icon="bars"/>
            </label>
            <ul className="header-menu">
                <Link to="/" className="lnk header-menu-items header-menu-items-unborder">Home</Link>
                <a href="#" className="lnk header-menu-items header-menu-items-unborder">About</a>
                <Link to="/login" className="lnk header-menu-items">
                    <span className="header-sign-in">Sign In</span>
                </Link>
                <label htmlFor="chk" className="header-hide-menu-btn">
                <FontAwesomeIcon icon="times"/></label>
            </ul>
        </div>
    );
}
 
export default ComponentHeader;