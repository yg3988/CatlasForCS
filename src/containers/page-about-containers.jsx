//node_modules
import React, { Component } from 'react';

//component
import AboutSubMenu         from "components/about/page-about-submenu";
import About                from "components/about/page-about";

//style
import "./page-about-containers.css";

class PageAbout extends Component {
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
                <AboutSubMenu/>
                <About/>
            </div>
        );
    }
}
 
export default PageAbout;