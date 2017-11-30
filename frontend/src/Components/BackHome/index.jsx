import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


class BackHome extends React.Component {
    render() {

        const styles = {
            backButton: {
                width: 800,
                padding: 15
            }
        }

        return (
            <div className="container">
                <div className="thank-you">
                    <h1 className="thanks">THANK YOU FOR SIGNING UP!</h1>
                    <div><img src="./images/cheers.svg" 
                              alt="thanks" 
                              height="220" 
                              width="220"
                              className="cheers"/>
                    </div>
                    <Link to="/">
                    <RaisedButton label="BACK HOME" 
                                  style={styles.backButton} 
                                  className="back-home"
                                  />
                    </Link>
                </div>
            </div>
        )
    }
}

export default BackHome;