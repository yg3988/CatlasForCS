//import modules
import React, { Component } from 'react';

//import components
import CurriculumGoal               from "components/page/curriculum/page-curriculum-goal";

class PageCurriculumGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="page-container">
        <CurriculumGoal/>
      </div>
    );
  }
}
 
export default PageCurriculumGoal;