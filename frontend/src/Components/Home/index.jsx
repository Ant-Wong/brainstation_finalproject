import React from 'react';
import LogIn from '../LogIn';
import About from '../About';
import Footer from '../Footer';
import { Link } from 'react-router-dom'

//MUI
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey100, blueGrey600 } from 'material-ui/styles/colors';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    aboutScroll = () => {
        let elmt = document.getElementById("about");
        elmt.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    pricingScroll = () => {
        let elmt = document.getElementById("pricing");
        elmt.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    
    faqScroll = () => {
        let elmt = document.getElementById("faq");
        elmt.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    render() {

        const styles = {
            navBar: {
                position: "fixed",
                backgroundColor: blueGrey600
            },
            drawer: {
                backgroundColor: blueGrey600
            },
            title: {
                fontSize: 30,
                cursor: 'pointer',
                paddingLeft: 50
            },
            smallIcon: {
                width: 36,
                height: 36,
            },
            small: {
                width: 72,
                height: 72,
                padding: 16
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
                    title={<span style={styles.title}>ELECTRIC CITY</span>}
                    
                    iconElementLeft={
                        <img src="./images/lightning.svg" alt="logo" height="50" width="50"
                             onClick={this.props.handleToggle} 
                             className="icon-menu" />
                    }
                    iconElementRight={
                        <Link to="/signup">
                            <FlatButton label="SIGN UP" 
                                        linkButton={true}
                                        style={styles.topRight}/>
                        </Link>
                    }
                />
                <Drawer open={this.props.open} 
                        width={250} 
                        openSecondary={true}
                        style={styles.drawer}>
                    <MenuItem onClick={this.aboutScroll}>ABOUT</MenuItem>
                    <MenuItem onClick={this.pricingScroll}>PRICING</MenuItem>
                    <MenuItem onClick={this.faqScroll}>FAQ</MenuItem>
                </Drawer>
                <LogIn logIn={this.props.logIn} authenticated={this.props.authenticated} />
                <About />
                <Footer />
            </div>
        )
    }
}

export default Home;