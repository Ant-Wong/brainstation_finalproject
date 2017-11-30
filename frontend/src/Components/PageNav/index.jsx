import React from 'react';

class PageNav extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="page-select">
                    <span><img src="./images/backarrow.svg" alt="navicon" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numberone.svg" alt="navicon" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numberthree.svg" alt="navicon" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/numbertwo.svg" alt="navicon" height="40" width="40" className="nav-buttons" /></span>
                    <span><img src="./images/forwardarrow.svg" alt="navicon" height="40" width="40" className="nav-buttons" /></span>
                </div>
            </div>
        )
    }
}

export default PageNav