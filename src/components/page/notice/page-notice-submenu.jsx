//node_modules
import React from "react";

//import store
import store from "store/store";

const AboutSubMenu = () => {
	return (
		<div id="submenu" className="submenu">
			<label htmlFor="submenu" className="submenu-title">
				공지 사항
			</label>
			<ul className="no-style-list submenu-list">
				<store.Consumer>
					{store => (
						<li onClick={store.handleUnivNoticeFlag} className="submenu-item">
							공지사항
						</li>
					)}
				</store.Consumer>
				{/* <store.Consumer>
					{store => (
						<li onClick={store.handleEduNoticeFlag} className="submenu-item">
							학사공지
						</li>
					)}
				</store.Consumer> */}
			</ul>
		</div>
	);
};

export default AboutSubMenu;
