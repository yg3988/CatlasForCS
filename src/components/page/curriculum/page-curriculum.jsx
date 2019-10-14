//node_modules
import React from 'react';

//import store
import Store from "store/store";

//import components
import TableMajorNecessary from "./table-major-necessary";
import TableMajorSelection from "./table-major-selection";

//import style
import "./page-curriculum.css";

const Curriculum = () => {
	let datePresentYear = new Date().getFullYear();
	return (
		<div className="page-commons-container">
			<h1>{datePresentYear} 학년도</h1>
				<div className="majors">
					<div className="major-kind">
						<Store.Consumer>
							{store => (<span onClick={store.handleNecessaryFlag}>필수</span>)}
						</Store.Consumer>
						<Store.Consumer>
							{store => (<span onClick={store.handleSelectionFlag}>선택</span>)}
						</Store.Consumer>
					</div>
				</div>
				<div className="dept-contents">
					<Store.Consumer>
						{store=>(store.isMajorNecessary ? <TableMajorNecessary/> : <TableMajorSelection/>)}
					</Store.Consumer>
				</div>
		</div>
	);
}
 
export default Curriculum;