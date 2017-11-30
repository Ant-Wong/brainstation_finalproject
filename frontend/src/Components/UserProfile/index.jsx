import React from 'react';
import axios from 'axios';
import UserInfo from '../UserInfo';
import UserMedia from '../UserMedia';
import { Link } from 'react-router-dom';

// MUI
import ProfilePic from '../ProfilePic';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey100, blueGrey600 } from 'material-ui/styles/colors';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInformation: {}
        }
    }

    componentWillMount() {
        this.userInformation()
    }

    userInformation = () => {
        axios.get('http://localhost:8000/users/' + this.props.match.params.id)
            .then(response => {
            console.log(response.data)
            this.setState({
                userInformation: response.data
            })
        })
    }

    bioScroll = () => {
        let elmt = document.getElementById("bio");
        elmt.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    musicScroll = () => {
        let elmt = document.getElementById("music");
        elmt.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

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
                marginRight: 50
            }
        };

        return (
            <div>
                <AppBar style={styles.navBar}
                    title={<span style={styles.title}>ELECTRIC CITY</span>}
                    
                    iconElementLeft={
                        <img src="../images/lightning.svg" 
                             alt="logo" 
                             height="50" 
                             width="50"
                             onClick={this.props.handleToggle}
                             className="icon-menu" />
                    }
                    iconElementRight={
                        <Link to="/browse">
                            <FlatButton label="BROWSE" 
                                        linkButton={true}
                                        style={styles.topRight}/>
                        </Link>
                    }
                />
                <Drawer open={this.props.open} 
                        width={250} 
                        openSecondary={true}>
                    <MenuItem onClick={this.bioScroll}>BIO</MenuItem>
                    <MenuItem onClick={this.musicScroll}>MUSIC</MenuItem>
                </Drawer>
                <ProfilePic userInformation={this.state.userInformation} />
                <UserInfo userInformation={this.state.userInformation} />
                <UserMedia userInformation={this.state.userInformation} />
            </div>
        )
    }
}

export default UserProfile;