//node_modules
import React from 'react';

//style
import "../page-submenu.css";

let arrSubmenu = ["교수진", "조교"];
let itemID = ["dept-professor", "dept-assistant"]

let submenuItem = arrSubmenu.map(
    (item, index) => {
        return(
            <a key={index} href={`/members#${itemID[index]}`} className="submenu-item">
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
            <label htmlFor="submenu" className="submenu-title">구성원 소개</label>
            <ul className="no-style-list submenu-list">
                {submenuItem}
            </ul>
        </div>
    );
}
 
export default AboutSubMenu;