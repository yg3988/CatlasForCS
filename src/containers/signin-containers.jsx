//node_modules
import React, { Component } from 'react';

//Store
import Store from "store/store";
//styles
import './signin-containers.css';

//components
import SignInForm           from '../components/signin/signin';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="signin-container">
                <Store.Consumer>
                    {(store) => (
                        <SignInForm title={store.title}/>
                    )}
                </Store.Consumer>
            </div>
        );
    }
}
 
export default SignIn;