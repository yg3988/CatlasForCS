//import modules
import React, { Component } from "react";
import cheerio from "cheerio";

//components
import NoticeSubMenu from "components/page/notice/page-notice-submenu";
import UnivNotice from "./page-notice-univ-containers";
// import EduNotice from "./page-notice-edu-containers";

//store
// import store from "store/store";

// const NoticeBoard = flag => {
// 	if (flag === 1) {
// 		return <UnivNotice />;
// 	} else if (flag === 2) {
// 		return <EduNotice />;
// 	}
// };

class PageNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="page-container">
				<NoticeSubMenu />
				{/* <store.Consumer>
					{store => NoticeBoard(store.flagNotice)}
				</store.Consumer> */}
				<UnivNotice />
			</div>
		);
	}
}

export default PageNotice;
