//node_module
import React, { Component } from "react";
import { fromJS, List } from "immutable";

//service
import { getMainNoticesList } from "service/service";

//components
import MainNotice from "components/page/notice/page-notice-main";

class ContainerUnivNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noticeList: List()
		};
	}

	componentDidMount() {
		getMainNoticesList().then(res => {
			this.setState({
				noticeList: res.data
			});
			console.log(res.data);
		});
	}

	render() {
		return <MainNotice postlist={this.state.noticeList} />;
		//return <MainNotice />;
	}
}

export default ContainerUnivNotice;
