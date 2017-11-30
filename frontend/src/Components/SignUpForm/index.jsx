import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { amber500, grey100 } from 'material-ui/styles/colors';

class SignUpForm extends React.Component {
    render() {

        const styles = {
            underlineStyle: {
                borderColor: amber500,
            },
            floatingLabelStyle: {
                color: grey100,
            },
            floatingLabelFocusStyle: {
                color: amber500,
            },
            textFld: {
                width: 500,
                height: 100
            },
            submitButton: {
                width: 1070
            }
        };
        
        return (
            <div className="container">
                <h1 className="info-request">
                    <img src="./images/clipboard.svg" alt="checklist" height="100" width="100" className="clipboard" />
                    Please enter your information
                    <img src="./images/clipboard.svg" alt="checklist" height="100" width="100" className="clipboard"/>
                </h1>
                <form ref={(self) => { this.loginForm = self }} className="signup-form">
                <div className="col-md-6">
                <div>
                <TextField
                    floatingLabelText="USERNAME"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="username"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="PASSWORD"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="password"
                    type="password"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="NAME"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="name"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="TITLE/INSTRUMENT"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="title"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="GENRE"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="genre"
                />
                </div>
                </div>
                <div className="col-md-6">
                <div>
                <TextField
                    floatingLabelText="PICTURE"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="picture"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="LOCATION"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="location"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="EMAIL"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="email"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="BIO"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="bio"
                />
                </div>
                <br />
                <div>
                <TextField
                    floatingLabelText="MEDIA"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                    style={styles.textFld}
                    name="media"
                />
                </div>
                </div>
                <br />
                <div>
                <Link to="/thankyou">
                <RaisedButton 
                    label="SUBMIT" 
                    style={styles.submitButton} 
                    className="submit-button"
                    onClick={() => { this.props.signUp(
                                        this.loginForm.username.value, 
                                        this.loginForm.password.value,
                                        this.loginForm.name.value, 
                                        this.loginForm.title.value,
                                        this.loginForm.genre.value,
                                        this.loginForm.picture.value, 
                                        this.loginForm.location.value,
                                        this.loginForm.email.value,
                                        this.loginForm.bio.value,
                                        this.loginForm.media.value
                                    ) }}    
                />
                </Link>
                </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;