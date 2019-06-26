//node_modules
import React, { Component } from 'react';

//components
import MainPage from 'components/home/main';

//style sheet
import "./home-containers.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="containers">
                <MainPage/>
            </div>
        );
    }
}
 
export default Home;