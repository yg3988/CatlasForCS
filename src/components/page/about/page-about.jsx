//node_modules
import React from 'react';

//styles
import "../page-commons.css"
import "./page-about.css"

const About = () => {
    return (
        <div className="page-commons-container dept-about-container">
            <div id="dept-introduce" className="dept-contents dept-introduce">
                <h2>학과 소개</h2>
                <div className="horizen-divider"></div>
                <div className="dept-description about-description">
                    <h4>경상대학교 컴퓨터과학과에 오신 것을 환영합니다.</h4>
                    <br/>
                    <h3>경상대학교 컴퓨터 과학과는 <span style={{color: "#3498db"}}>글로벌 IT전문 인력 양성</span>을 위해 최선을 다하겠습니다.</h3>
                    <br/>
                    <p>
                    <span style={{fontWeight: "bold", color: "#2956a6"}}>경상대학교 자연과학대학 컴퓨터과학과</span>는 30여년의 역사를 통해 컴퓨터과학 분야에서
                    창의적이고 개척적인 인재를 양성과 교수진들의 우수한 연구실적을 발표해 오고 있다. 현재 약 200여명의
                    학부생과 20여명의 석박사과정 대학원생, 그리고 9명의 전임교수가 교육 및 연구에 매진하고 있다.
                    <br/>
                    <br/>
                    컴퓨터과학과에서는 민주이념과 개척정신을 바탕으로 인격을 도야하고 학문의 심오한 이론과 방법을 교수
                    연구하여 국가와 인류사회에 기여하는 인재를 양성하는 경상대학교 교육목표와 21세기 자연과학을 선도하는
                    경쟁력있는 글로벌 인재를 양성하는 경상대학교 자연과학대학의 교육목적을 바탕으로 창의적이고 개척적인
                    명품 IT 전문가를 양성한다. 이를 위해 국제적인 감각과 윤리관을 갖추고, 컴퓨터과학에 대한 이해뿐만 아니라
                    창의적 문제해결 능력과 현장 실무형 전문 프로그래밍 기술인력 양성을 교육목적으로 한다.
                    <br/>
                    <br/>
                    컴퓨터과학은 미래 사회의 정보통신 및 정보산업 분야를 선도하여 중추적인 역할을 수행하며,
                    IT분야의 소프트웨어 인력의 필요성으로 사회적인 요구가 급증하고 있다. 현재 컴퓨터과학과의 졸업생들은
                    컴퓨터 및 정보통신 기술관련 회사, 대학원 진학, 금융기관, 공무원, 국여기업, 연구소, 중등학교 교사,
                    대학의 교수, 벤처기업 창업, 각종 컴퓨터 응용 관련 프리랜서 등으로
                    진출하여 활약하고 있다.
                    </p>
                </div>
            </div>
            <div id="dept-history" className="dept-contents dept-history">
                <h2>학과 연혁</h2>
                <div className="horizen-divider"></div>
                <ul className="dept-history-timeline">
                    <li className="event" data-date="1979">
                        <h3>전산통계학과 설립 인가</h3>
                    </li>
                    <li className="event" data-date="1987">
                        <h3>전자계산학과, 통계학과로 분리</h3>
                    </li>
                    <li className="event" data-date="1995">
                        <h3>컴퓨터과학과로 개칭</h3>
                    </li>
                    <li className="event" data-date="2004">
                        <h3>컴퓨터과학부(컴퓨터과학전공, 정보과학전공)로 개편</h3>
                    </li>
                    <li className="event" data-date="2011">
                        <h3>컴퓨터과학과로 개칭, 컴퓨터교육과와 통합</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default About;