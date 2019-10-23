//node_modules
import React from "react";

//styles
import "../page-commons.css";

const MainNotice = ({ postlist }) => {
	//const MainNotice = () => {
	return (
		<div className="page-commons-container">
			<h1>공지 사항</h1>
			<div className="horizen-divider divider-margin-top-x4 divider-margin-bottom-x4"></div>
			<table>
				<tbody>
					{postlist.map(element => {
						console.log(element);
						return (
							<tr key={element.No}>
								<td>공지</td>
								<td>
									<a
										href={`http://cs.gnu.ac.kr/csadmin/sub.do${element.URL}`}
										className="items-title"
									>
										{element.Title}
									</a>
								</td>
								<td>
									<ul>
										<li>{element.WrittenDate.split("T")[0]}</li>
										<li>{element.Hit}</li>
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

export default MainNotice;
