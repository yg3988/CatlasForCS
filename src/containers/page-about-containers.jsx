//node_modules
import React, { Component } from 'react';

//component
import AboutSubMenu         from "components/page/about/page-about-submenu";
import About                from "components/page/about/page-about";

//style
import "./page-containers.css";

class PageAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
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