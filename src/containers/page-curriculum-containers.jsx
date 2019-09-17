//node_modules
import React, { Component }     from 'react';

//components
import CurriculumSubmenu        from "components/page/curriculum/page-curriculum-submenu";
import Curriculum               from "components/page/curriculum/page-curriculum";

//styles
import "./page-curriculum-containers.css";

class PageCurriculum extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="page-container">
                <CurriculumSubmenu/>
                <Curriculum/>
            </div>
        );
    }
}
 
export default PageCurriculum;