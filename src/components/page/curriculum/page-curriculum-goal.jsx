//import modules
import React from 'react';

//import stylesheet
import "./page-curriculum-goal.css"

import Goal from "../../../images/curriculum/EducationGoal.png";

const CurriculumGoal = () => {
  return (
    <div className="page-commons-container">
      <img src={Goal} alt="Education Goal" className="goal-img"/>
    </div>
  );
}
 
export default CurriculumGoal;