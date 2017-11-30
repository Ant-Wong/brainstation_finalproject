import React from 'react';
import BackHome from '../BackHome';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey100, blueGrey600 } from 'material-ui/styles/colors';

class ThankYou extends React.Component {
    render() {

        const styles = {
            navBar: {
                position: "fixed",
                backgroundColor: blueGrey600
            },
            title: {
                fontSize: 30,
                cursor: 'pointer',
                paddingLeft: 50
            },
            topRight: {
                color: grey100,
                padding: 5
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

                />
                <Drawer open={this.props.open} 
                        width={250} 
                        openSecondary={true}
                        style={styles.drawer}>
                    <MenuItem onClick={this.slideScroll}>ABOUT</MenuItem>
                    <MenuItem>PRICING</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </Drawer>
                <BackHome />
                <Footer />
            </div>
        )
    }
}

export default ThankYou;