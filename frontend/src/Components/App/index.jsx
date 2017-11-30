import React from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';

// MUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey700 } from 'material-ui/styles/colors';

//COMPONENTS
import Home from '../Home';
import SignUp from '../SignUp';
import UserProfile from '../UserProfile';
import Browse from '../Browse';
import ThankYou from '../ThankYou';


//CSS
import '../../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: null,
      open: false
    }
    this.logIn = this.logIn.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  logIn = (username, password) => {
    console.log('triggered')
    axios.post('http://localhost:8000/login', {
      username: username,
      password: password
    }).then((response) => {
      console.log(response.data)
      this.setState({
        authenticated: response.data.authenticated
      }, () => {
        console.log(response.data)
        window.location = "/user/" + response.data.id
      })
    })
  }

  signUp = (username, password, name, title, genre, picture, location, email, bio, media) => {
    axios.post('http://localhost:8000/signup', {
      username: username,
      password: password,
      name: name,
      title: title,
      genre: genre,
      picture: picture,
      location: location,
      email: email,
      bio: bio,
      media: media
    }).then((response) => {
      console.log(response.data)
    })
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {

    const muiTheme = getMuiTheme({
      palette: {
        textColor: blueGrey700,
      },
      appBar: {
        height: 100,
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => {
            return <Home logIn={this.logIn} 
                         authenticated={this.state.authenticated}
                         open={this.state.open}
                         handleToggle={this.handleToggle}/>
          }} />
          <Route path="/signup" render={(props) => {
            return <SignUp open={this.state.open}
                           handleToggle={this.handleToggle}
                           signUp={this.signUp}/>
          }} />
          <Route path="/user/:id" render={(props) => {
            return <UserProfile open={this.state.open}
                                handleToggle={this.handleToggle}
                                {...props} />
          }} />
          <Route path="/browse" render={(props) => {
            return <Browse open={this.state.open}
                           handleToggle={this.handleToggle}
                           {...props} />
          }} />
          <Route path="/thankyou" render={(props) => {
          return <ThankYou open={this.state.open}
                           handleToggle={this.handleToggle} />
          }} />
        </Switch>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
