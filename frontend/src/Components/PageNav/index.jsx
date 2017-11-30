import React from 'react';

class PageNav extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-select">
                    <span><img src="./images/backarrow.svg" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numberone.svg" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numberthree.svg" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numbertwo.svg" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/forwardarrow.svg" height="40" width="40" className="nav-buttons" /></span>
                </div>
            </div>
        )
    }
}

export default PageNav