//import modules
import React, { Component } from "react";

//components
import NoticeSubMenu from "components/page/notice/page-notice-submenu";
import MainNotice from "./page-notice-main-containers";
import SubNotice from "./page-notice-sub-containers";

//store
import store from "store/store";

const NoticeBoard = flag => {
	if (flag === 1) {
		return <MainNotice />;
	} else if (flag === 2) {
		return <SubNotice />;
	}
};

class PageNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="page-container">
				<NoticeSubMenu />
				<store.Consumer>
					{store => NoticeBoard(store.flagNotice)}
				</store.Consumer>
			</div>
		);
	}
}

export default PageNotice;
