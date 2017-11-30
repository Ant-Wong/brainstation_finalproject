import React from 'react';

class UserInfo extends React.Component {
    render() {
        console.log(this.props.userInformation)
        if(Object.keys(this.props.userInformation).length === 0) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="container-fluid">
                    <div className="jumbotron" id="bio">
                        <h1 className="display-3">BIOGRAPHY</h1>
                        <hr className="my-4" />
                            <p className="bio-info">
                                {this.props.userInformation.bio}
                            </p>
                    </div>
                </div>
            )
        }
    }
}

export default UserInfo;