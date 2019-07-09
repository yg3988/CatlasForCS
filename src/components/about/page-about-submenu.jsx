//node_modules
import React from 'react';

//style
import "./page-about-submenu.css";

const arrSubmenu = ["학과 소개", "연혁"];
const itemID = ["dept-introduce", "dept-history"]

const submenuItem = arrSubmenu.map(
    (item, index) => {
        return(
            <a key={index} href={`/about#${itemID[index]}`} className="submenu-item">
                <li>
                    {item}
                </li>
            </a>
        )
    }
)

const AboutSubMenu = () => {
    return (
        <div id="submenu" className="submenu">
            <label htmlFor="submenu" className="submenu-title">학과소개</label>
            <ul className="no-style-list submenu-list">
                {submenuItem}
            </ul>
        </div>
    );
}
 
export default AboutSubMenu;