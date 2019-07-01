//node_modules
import React from 'react';

//styles
import "./contents-navbar.css"

const arrMenuItems = ["학과소개", "구성원", "교과", "소식", "게시판"]

const navList = arrMenuItems.map(
    (item, index) => {
        return (
            <li key={index} className="menu-items">
                <a href={`#m${index}`} className="lnk">
                    {item}
                </a>
            </li>
        )
    }
)

const ContentsNavBar = () => {
    return (
        <div className="navbar-container">
            <ul>
                {navList}
            </ul>
        </div>
    );
}
 
export default ContentsNavBar;