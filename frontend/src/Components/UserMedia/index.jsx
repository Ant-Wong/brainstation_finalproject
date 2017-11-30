import React from 'react';

class UserMedia extends React.Component {
    render() {
        console.log(this.props.userInformation.media)
        
        return (
            <div className="container-fluid" className="media-position" id="music">
                <div className="row">
                    <h1 className="latest-music">MUSIC<img src="../images/spotify.svg" alt="logo" height="75" width="75" className="icon-header" /></h1>
                <hr />
                <div className="col-md-8">
                <span><iframe src={this.props.userInformation.media} 
                        width="750" 
                        height="580" 
                        frameborder="0" 
                        allowtransparency="true"
                        className="playlist">
                </iframe>
                </span>
                </div>
                <div className="col-md-4">
                <span><img src="../images/disc.svg" 
                           alt="music" 
                           height="420" 
                           width="420" 
                           className="disc"/>
                </span>
                </div>
                </div>
            </div>
        )
    }
}

export default UserMedia;