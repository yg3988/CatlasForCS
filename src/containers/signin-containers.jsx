//node_modules
import React, { Component } from 'react';

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
                <SignInForm/>
            </div>
        );
    }
}
 
export default SignIn;