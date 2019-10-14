import React from 'react';

let arrMajorSeletion = [
    [],
    [
        ["전산수학", "UNIX 시스템"],
        ["객체지향 프로그래밍", "Java 프로그래밍", "논리회로"]
    ],
    [
        ["빅테이터 관리", "시스템 프로그래밍"],
        ["시스템 분석 및 설계", "운영체제", "컴퓨터 그래픽스", "데이터베이스 체제론", "컴퓨터과학 교육론"]
    ],
    [
        ["데이터베이스 프로그래밍", "데이터 통신 및 네트워크", "인공지능", "영상처리", "문제해결실무", "컴퓨터과학 교재 연구"],
        ["기계학습", "모바일 프로그래밍", "사물 인터넷", "컴퓨터 과학 교육 논리 및 논술"]
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

const showTableCurriculumGrade = arrMajorSeletion.map(
	(item, idx) => {
		return (
			<div key={idx} id={`c${idx}`} className="major-contents curriculum-selection">
				<h2>{idx+1}학년</h2>
				{showTableCurriculumSemester(item)}
			</div>
		)
	}
)


const TableMajorSelection = () => {
	let datePresentYear = new Date().getFullYear();
  return (
    <div>
			<h1>{datePresentYear} 학년도 전공 선택</h1>
      {showTableCurriculumGrade}
    </div>
  );
}
 
export default TableMajorSelection;