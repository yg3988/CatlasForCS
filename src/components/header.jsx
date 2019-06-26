//node_modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//stylesheet
import "./header.css"

const ComponentHeader = ({title}) => {
    return (
        <div>
            <h2 className="logo">
                {title}
            </h2>
            <input type="checkbox" id="chk"/>
            <label htmlFor="chk" className="show-menu-btn">
                <FontAwesomeIcon icon="bars"/>
            </label>
            <ul className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <label htmlFor="chk" className="hide-menu-btn">
                <FontAwesomeIcon icon="times"/></label>
            </ul>
        </div>
    );
}
 
export default ComponentHeader;