//node_modules
import React                from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { Link }             from 'react-router-dom';

//styles
import './contents-curriculum.css'

const arrLabels = ["교과 과정", "교육 목표", "학사 일정", "장학 안내"];
const arrClassName = ["curriculum", "curriculum-goal", "curriculum-schedule", "scholarship"];
const arrIcons = ["book", "binoculars", "calendar-alt", "hand-holding-heart"];

const boxButtonList = arrLabels.map(
  (lable, index) => {
    return(
      <Link to={`/${arrClassName[index]}`} className={`box ${arrClassName[index]}`}  key={index}>
        <div>
          <FontAwesomeIcon icon={`${arrIcons[index]}`} className="fa-4x"/>
          <p className="box-label">{lable}</p>
        </div>
      </Link>
    )
  }
)

const Curriculum = () => {
  return (
    <div className="contents-containers curriculum-container" id="m2">
      <section className="section-curriculum">
        <div className="curriculum-contents">
          <h2>학사과정 및 교과를 알려드립니다.</h2>
          <p className="pram lorem-pram-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet hic saepe, voluptatem corporis, eum dicta reprehenderit similique officiis explicabo itaque, commodi quod incidunt alias assumenda ad odit cupiditate exercitationem.</p>
        </div>
        {boxButtonList}
      </section>
    </div>
  );
}
 
export default Curriculum;