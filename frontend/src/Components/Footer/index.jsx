import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/?lang=en" className="fa fa-twitter"></a>
                    <a href="https://www.spotify.com/ca-en/" className="fa fa-spotify"></a>
                    <a href="https://www.instagram.com/?hl=en" className="fa fa-instagram"></a>
                </div>
            </div>
        )
    }
}

export default Footer;