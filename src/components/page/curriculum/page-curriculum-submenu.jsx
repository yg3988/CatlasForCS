//node_modules
import React from 'react';

//style
import "../page-submenu.css";

let arrSubmenu = ["1학년", "2학년", "3학년", "4학년"];

let submenuItem = arrSubmenu.map(
    (item, index) => {
        return(
            <a key={index} className="submenu-item">
                <li>
                    {item}
                </li>
            </a>
        )
    }
)

const CurriculumSubmenu = () => {
    return (
        <div id="submenu" className="submenu">
            <label htmlFor="submenu" className="submenu-title">교과 과정</label>
            <ul className="no-style-list submenu-list">
                {submenuItem}
            </ul>
        </div>
    );
}
 
export default CurriculumSubmenu;