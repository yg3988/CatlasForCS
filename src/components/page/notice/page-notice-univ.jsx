//node_modules
import React from "react";

//styles
import "../page-commons.css";

const UnivNotcie = ({ postlist }) => {
	return (
		<div className="page-commons-container">
			<h1>공지 사항</h1>
			<div className="horizen-divider divider-margin-top-x4 divider-margin-bottom-x4"></div>
			<table>
				<tbody>
					{postlist.map(element => {
						const { title, url, date, read } = element.toJS();
						console.log("title : " + title);
						console.log("url : " + url);
						console.log("date : " + date);
						console.log("read : " + read);
						return (
							<tr key={element}>
								<td>공지</td>
								<td>
									<a
										href={`http://cs.gnu.ac.kr/csadmin/sub.do${url}`}
										className="items-title"
									>
										{title}
									</a>
								</td>
								<td>
									<ul>
										<li>{date}</li>
										<li>{read}</li>
									</ul>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UnivNotcie;
