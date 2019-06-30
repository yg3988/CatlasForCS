//node_modules
import React from 'react';

//styles
import './signin.css';

const SignInForm = ({title}) => {
    return (
        <div>
            <div className="signin-input-form">
                <p className="signin-header">
                    Log In to {title}
                </p>
                <form method="post" className="form-box">
                    <div className="input-box">
                        <label htmlFor="input-id" className="input-label">user name</label>
                        <input type="text" name="input-id" id="input-id" tapindex="1" className="input-form"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="input-password" className="input-label">password</label>
                        <input type="password" name="input-password" id="input-password" tapindex="2" className="input-form"/>
                    </div>
                    <input type="submit" tapindex="3" value="Sign in" id="btn-signin" className="btn btn-primary btn-sign btn-signin"/>
                </form>
                <div className="horizen-divider"></div>
                <div className="signup-box">
                    <label htmlFor="btn-signup" className="input-label">For new to Catlas user</label>
                    <button id="btn-signup" className="btn btn-secondary btn-sign btn-signup">Sign up</button>
                </div>
            </div>
        </div>
    );
}
 
export default SignInForm;