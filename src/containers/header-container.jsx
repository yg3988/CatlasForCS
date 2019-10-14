//node_modules
import React, { Component } from 'react';

//store
import Store from "store/store";

//components
import ComponentHeader from "components/header";

//stylesheet
import "./header-container.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return (
            <div className="header">
                <Store.Consumer>
                    {(store) => (
                        <ComponentHeader title={store.title}/>
                    )}
                </Store.Consumer>
            </div>
        );
    }
}
 
export default Header;