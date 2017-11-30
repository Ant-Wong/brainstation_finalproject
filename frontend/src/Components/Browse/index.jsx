import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// MUI
// import SearchForm from '../SearchForm';
import SearchBar from 'material-ui-search-bar';
// import PhotoGrid from '../PhotoGrid';
import PageNav from '../PageNav';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { grey100, blueGrey600 } from 'material-ui/styles/colors';

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userInfo: {},
            filteredUsers: []
        }
    }

    componentWillMount() {
        let promise = axios.get("http://localhost:8000/users")
        promise.then((response) => {
            console.log(response.data)
            let data = response.data
            const usersJSX = data.map((data, i) =>
                <span className="avatar" key={i}>
                    <Link to={`/user/${data._id}`}>
                        <img src={data.picture} alt="profile" className="img-thumbnail" />
                    </Link>
                    <div>{data.name}</div>
                    <div>{data.title}</div>
                    <div>{data.genre}</div>
                </span>
            )

            this.setState({
                userInfo: response.data,
                users: usersJSX,
                filteredUsers: response.data
            })
        })
    }

    searchArtist = (event) => {
        let searchInput = this.searchForm.searchBar.value;

        let filteredArtists = this.state.userInfo.filter((user) => {
            if(user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
               user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
               user.name.toLowerCase().includes(searchInput.toLowerCase())
            ) return true
                else if (
                searchInput.toLowerCase() === ""
                ) return true
        })


        this.setState({
            filteredUsers: filteredArtists
        }, () => {
            console.log(this.state.filteredUsers)
        })
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
            searchStyle: {
                margin: '0 auto',
                maxWidth: 800
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

       

        let filteredArtistsJSX = this.state.filteredUsers.map((artist, i) => {
            return (
                <span className="avatar" key={i}>
                    <Link to={`/user/${artist._id}`}>
                        <img src={artist.picture} alt="profile" className="img-thumbnail" />
                    </Link>
                    <div>{artist.name}</div>
                    <div>{artist.title}</div>
                    <div>{artist.genre}</div>
                </span>  
            )
        })

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
                        <Link to="/user">
                            <FlatButton label="HOME" 
                                        linkButton={true}
                                        style={styles.topRight}/>
                        </Link>
                    }
                />
                <div className="container-fluid">
                    <form ref={(self) => { this.searchForm = self }} className="searchform">
                        <div>
                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onKeyUp={this.searchArtist}
                                style={styles.searchStyle}
                                id="mySearchForm"
                                name="searchBar"
                            />
                        </div>
                    </form>
                    <div className="container-fluid">
                        <div className="userphotos">
                            {filteredArtistsJSX}
                        </div>
                    </div>
                </div>
            <PageNav />
            </div>
        )
    }
}

export default Browse;