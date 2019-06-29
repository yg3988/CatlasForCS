//node_modules
import React, { Component } from 'react';

//styles
import './footer-containers.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="footer-container">Made by CornerRoom on Dept.Computer Science in GyeongSang National University</div>
        );
    }
}
 
export default Footer;