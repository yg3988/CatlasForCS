//node_modules
import React, { Component } from "react";
import cheerio from "cheerio";
import { fromJS, List } from "immutable";

//components
import EduNotice from "components/page/notice/page-notice-edu";

//service
import { getEduNotice } from "service/crawler";

class ContainerEduNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noticeList: List(),
			URL:
				"https://www.gnu.ac.kr/program/multipleboard/BoardList.jsp?groupNo=10027"
		};
	}
	componentDidMount() {
		getEduNotice(this.state.URL)
			.then(html => {
				let ulList = [];
				const $ = cheerio.load(html.data);
				const $bodyList1 = $("table.basic tbody.tb").children("tr");

				$bodyList1.each(function(i, elem) {
					ulList[i] = {
						no: $(this)
							.find("td.first")
							.text(),
						title: $(this)
							.find("td.subject a:first-child")
							.text(),
						url: $(this)
							.find("td.subject a")
							.attr("href"),
						date: $(this)
							.find("td:nth-child(3)")
							.text(),
						read: $(this)
							.find("td.last")
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
		return <EduNotice postlist={this.state.noticeList} />;
	}
}

export default ContainerEduNotice;
