import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {

        const styles = {
            connectStyle: {
                width: 167,
                height: 65
            },
            popoverStyle: {
                width: 120
            }
        }

        return (
            <div className="container-fluid" id="profile-background">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                <div className="col-md-5" id="profile-pic">
                <img src={this.props.userInformation.picture}
                     className="img-fluid" 
                     alt="Profile Pic" />
                <div className="profile-icons">
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/?lang=en" className="fa fa-twitter"></a>
                    <a href="https://www.spotify.com/ca-en/" className="fa fa-spotify"></a>
                    <a href="https://www.instagram.com/?hl=en" className="fa fa-instagram"></a>
                </div>
                </div>
                <div className="col-md-5" id="contact-background">
                    <div className="user-info">
                        <h2 className="info-lines">{this.props.userInformation.name}</h2>
                        <h3 className="contact">{this.props.userInformation.title}</h3>
                        <h3 className="contact">{this.props.userInformation.location}</h3>
                        <h3 className="contact">{this.props.userInformation.email}</h3>
                    </div>
                    <RaisedButton label="CONNECT" 
                                  default={true} 
                                  onClick={this.handleTouchTap}
                                  style={styles.connectStyle} 
                                  className="connect-button" />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical} >
                        <Menu>
                            <MenuItem primaryText="Facebook"
                                      style={styles.popoverStyle} 
                                      href="https://www.facebook.com/" />
                            <MenuItem primaryText="Twitter"
                                      href="https://twitter.com/?lang=en" />
                            <MenuItem primaryText="Spotify" 
                                      href="https://www.spotify.com/ca-en/" />
                            <MenuItem primaryText="Instgram" 
                                      href="https://www.instagram.com/?hl=en" />
                        </Menu>
                    </Popover>
                </div>
                <div className="col-md-1">
                </div>
                </div>
            </div>
        )
    }
}

export default ProfilePic;