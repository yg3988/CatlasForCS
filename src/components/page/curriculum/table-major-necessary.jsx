import React from 'react';

let arrMajorNecessary = [
  [
    ["C 프로그래밍"],
    ["Pyton 프로그래밍"]
  ],
  [
    ["기초설계 및 프로젝트","컴퓨터시스템개론"],
    ["소프트웨어공학론", "웹프로그래밍/실습", "자료구조"]
  ],
  [
    ["소프트웨어 설계 및 프로젝트", "프로그래밍 언어론", "컴퓨터 구조"],
  	["알고리즘"]
  ],
  [
		["종합 설계 및 프로젝트"]
  ]
];

const showTableCurriculum = (itemSemester) => {
	return(
		itemSemester.map(
			(item, idx) => {
				return(
					<div key={idx}>
						<h4>{item}</h4>
					</div>
				)
			}
		)
	)
}

const showTableCurriculumSemester = (itemGrade) => {
	return(
		itemGrade.map(
			(item, idx) => {
				return(
					<div key={idx}>
						<h3>{idx+1}학기</h3>
						{showTableCurriculum(item)}
					</div>
				)
			}
		)
	)
}

const showTableCurriculumGrade = arrMajorNecessary.map(
	(item, idx) => {
		return (
			<div key={idx} id={`c${idx}`} className="major-contents curriculum-necessary">
				<h2>{idx+1}학년</h2>
				{showTableCurriculumSemester(item)}
			</div>
		)
	}
)

const TableMajorNecessary = () => {
  return (
    <div>
      {showTableCurriculumGrade}
    </div>
  );
}
 
export default TableMajorNecessary;