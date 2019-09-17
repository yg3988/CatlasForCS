//node_modules
import React from 'react';

//
let arrGrade = ["1학년", "2학년", "3학년", "4학년"];
let arrCurriculum = [
    ["C언어", "객체지향언어실습"],
    ["기초설계 및 프로젝트","컴퓨터시스템개론", "소프트웨어공학론", "웹프로그래밍/실습", "자료구조", "Java프로그래밍/실습"],
    [],
    []
];

let showGradeCurriculum = arrGrade.map(
    (item, index) => {
        return(
            <div>
                <h2>{item}</h2>
            </div>
        )
    }
)

const Curriculum = () => {
    return (
        <div className="page-commons-container dept-contents">
            {showGradeCurriculum}
        </div>
    );
}
 
export default Curriculum;