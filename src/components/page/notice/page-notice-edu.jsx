//node_modules
import React from "react";

//styles
import "../page-commons.css";

const EduNotcie = ({ postlist }) => {
	return (
		<div className="page-commons-container">
			<h1>학사 공지</h1>
			<div className="horizen-divider divider-margin-top-x4 divider-margin-bottom-x4">
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
											href={`https://www.gnu.ac.kr/program/multipleboard/${url}`}
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
		</div>
	);
};

export default EduNotcie;
