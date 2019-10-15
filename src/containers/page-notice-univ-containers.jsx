//node_module
import React, { Component } from "react";
import cheerio from "cheerio";
import { fromJS, List } from "immutable";
//components
import UnivNotice from "components/page/notice/page-notice-univ";

//service
import { getUnivNotice } from "service/crawler";

class ContainerUnivNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noticeList: List(),
			URL: "http://cs.gnu.ac.kr/csadmin/sub.do?mCode=MN0038"
		};
	}

	componentDidMount() {
		getUnivNotice(this.state.URL)
			.then(html => {
				let ulList = [];
				const $ = cheerio.load(html.data);
				const $bodyList1 = $("table.board-list-table tbody").children(
					"tr.isnotice "
				);
				const $bodyList2 = $("table.board-list-table tbody").children(
					"tr.child_1"
				);

				$bodyList1.each(function(i, elem) {
					ulList[i] = {
						title: $(this)
							.find("td.subject a")
							.text(),
						url: $(this)
							.find("td.subject a")
							.attr("href"),
						date: $(this)
							.find("td.date")
							.text(),
						read: $(this)
							.find("td.read")
							.text()
					};
				});

				const length = ulList.length;

				$bodyList2.each(function(i, elem) {
					ulList[i + length] = {
						title: $(this)
							.find("td.subject a")
							.text(),
						url: $(this)
							.find("td.subject a")
							.attr("href"),
						date: $(this)
							.find("td.date")
							.text(),
						read: $(this)
							.find("td.read")
							.text()
					};
				});

				const data = ulList.filter(n => n.title);
				return data;
			})
			.then(res =>
				this.setState({
					noticeList: fromJS(res)
				})
			);
	}

	render() {
		return <UnivNotice postlist={this.state.noticeList} />;
	}
}

export default ContainerUnivNotice;
