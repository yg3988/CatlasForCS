//node_modules
import React from "react";

//styles
import "../page-commons.css";

const SubNotcie = ({ postlist }) => {
	//const SubNotcie = () => {
	return (
		<div className="page-commons-container">
			<h1>공지</h1>
			<div className="horizen-divider divider-margin-top-x4 divider-margin-bottom-x4">
				<table>
					<tbody>
						{postlist.map(element => {
							console.log(element);
							return (
								<tr key={element.No}>
									<td>{element.No}</td>
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
		</div>
	);
};

export default SubNotcie;
