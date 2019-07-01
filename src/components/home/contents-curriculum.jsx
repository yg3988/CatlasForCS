//node_modules
import React                from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
//styles
import './contents-curriculum.css'

const Curriculum = () => {
  return (
    <div className="contents-containers curriculum-container" id="m2">
      <section className="section-curriculum">
        <div className="curriculum-contents">
          <h2>학사과정 및 교과를 알려드립니다.</h2>
          <button className="btn btn-primary btn-more">Read more..</button>
        </div>
        <div className="box curriculum">
          <FontAwesomeIcon icon="book" className="fa-4x"/>
          <p className="box-label">교과 과정</p>
        </div>
        <div className="box curriculum-goal">
          <FontAwesomeIcon icon="binoculars" className="fa-4x"/>
          <p className="box-label">교육 목표</p>
        </div>
        <div className="box curriculum-schedule">
          <FontAwesomeIcon icon="calendar-alt" className="fa-4x"/>
          <p className="box-label">학사 일정</p>
        </div>
        <div className="box scholarship">
          <FontAwesomeIcon icon="hand-holding-heart" className="fa-4x"></FontAwesomeIcon>
          <p className="box-label">장학 안내</p>
        </div>
      </section>
    </div>
  );
}
 
export default Curriculum;