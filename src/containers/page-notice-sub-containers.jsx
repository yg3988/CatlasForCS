//node_modules
import React, { Component } from "react";
import { fromJS, List } from "immutable";

//service
import { getSubNoticesList } from "service/service";

//components
import SubNotice from "components/page/notice/page-notice-sub";

class ContainerSubNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noticeList: List()
		};
	}
	componentDidMount() {
		getSubNoticesList().then(res => {
			this.setState({
				noticeList: res.data
			});
			console.log(res);
		});
	}

	render() {
		return <SubNotice postlist={this.state.noticeList} />;
		// return <SubNotice />;
	}
}

export default ContainerSubNotice;
