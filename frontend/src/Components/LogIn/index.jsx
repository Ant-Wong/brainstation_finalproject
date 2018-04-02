import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey100, yellow600 } from 'material-ui/styles/colors';

class LogIn extends React.Component {
    render() {
        console.log(this.props.authenticated)
        const styles = {
            inputStyle: {
                color: grey100
            },
            floatingLabelStyle: {
                color: grey100,
            },
            floatingLabelFocusStyle: {
                color: yellow600,
            },
            underlineStyle: {
                borderColor: yellow600,
            },
            textFld: { 
                width: 700, 
                height: 100,
            },
            button1: {
                margin: 120,
                marginLeft: 60,
            },
            button2: {
                margin: 50,
                marginLeft: 80
            }
        };

        return (
            <div className="container-fluid" id="login-background">
                <form ref={(self) => { this.loginForm = self }} className="login-form">
                <div>
                    <h1 className="welcome">ELECTRIC CITY</h1>
                </div>
                <div>
                    <TextField
                        floatingLabelText="USERNAME"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        inputStyle={styles.inputStyle}
                        style={styles.textFld}
                        name="username"
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="PASSWORD"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        inputStyle={styles.inputStyle}
                        style={styles.textFld}
                        name="password"
                        type="password"
                    />
                </div>
                <span>
                <RaisedButton 
                    label="Log In" 
                    default={true} 
                    style={styles.button1}
                    className="loginButton"
                    type="submit"
                    onClick={() => { 
                        console.log(this.loginForm.password.value)
                        this.props.logIn(this.loginForm.username.value, this.loginForm.password.value)
                        }}
                    />
                </span>
                <span>{
                    this.props.authenticated === null ? '' :
                    this.props.authenticated ? "Login Success" : "Login Failed"
                }</span>
                <span>
                <RaisedButton 
                    label="Forgot Password" 
                    default={true} 
                    style={styles.button2}
                    className="forgotButton"
                    />
                </span>
                </form>
            </div>

        )
    }
}

export default LogIn;