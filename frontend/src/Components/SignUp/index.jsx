import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import SignUpForm from '../SignUpForm';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { grey100, blueGrey600 } from 'material-ui/styles/colors';

class SignUp extends React.Component {

    render() {
        const styles = {
            navBar: {
                position: "fixed",
                backgroundColor: blueGrey600
            },
            title: {
                fontSize: 30,
                cursor: 'pointer',
                paddingLeft: 50,
            },
            smallIcon: {
                width: 36,
                height: 36,
            },
            small: {
                width: 72,
                height: 72,
                padding: 16,
            },
            topRight: {
                color: grey100,
                padding: 3,
                marginRight: 30
            }
        };
        return (
            <div>
                <AppBar style={styles.navBar}
                    title={<span style={styles.title} className="nav-title">ELECTRIC CITY</span>}
                    
                    iconElementLeft={
                        <img src="./images/lightning.svg" alt="logo" height="50" width="50"
                            onClick={this.props.handleToggle}
                            className="icon-menu" />
                    }
                    iconElementRight={
                        <Link to="/">
                            <FlatButton label="HOME" 
                                        linkButton={true}
                                        style={styles.topRight}/>
                        </Link>
                    }
                />
                <SignUpForm signUp={this.props.signUp} />
            </div>
        )
    }
}

export default SignUp;