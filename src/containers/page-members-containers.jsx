//node_modules
import React, { Component } from 'react';

//component
import MembersSubMenu         from "components/page/members/page-members-submenu";
import Members                from "components/page/members/page-members";

//style
import "./page-containers.css";

class PageMembers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() { 
        return (
            <div className="page-container">
                <MembersSubMenu/>
                <Members/>
            </div>
        );
    }
}
 
export default PageMembers;