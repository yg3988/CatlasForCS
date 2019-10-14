//node_modules
import React from 'react';

//import store
import store from "store/store"
import Store from '../../../store/store';

let arrSubmenu = ["공지사항", "학사공지"];
let itemID = ["dept-professor", "dept-assistant"]
let arrHandleFunction = ["handleUnivNoticeFlag", "handleEduNoticeFlag"]

const AboutSubMenu = () => {
    return (
        <div id="submenu" className="submenu">
            <label htmlFor="submenu" className="submenu-title">공지 사항</label>
            <ul className="no-style-list submenu-list">
                <Store.Consumer>
                    {store => (
                        <li onClick={store.handleUnivNoticeFlag} className="submenu-item">
                            공지사항
                        </li>
                    )}
                </Store.Consumer>
                <Store.Consumer>
                    {store => (
                        <li onClick={store.handleEduNoticeFlag} className="submenu-item">
                            학사공지
                        </li>
                    )}
                </Store.Consumer>
            </ul>
        </div>
    );
}
 
export default AboutSubMenu;