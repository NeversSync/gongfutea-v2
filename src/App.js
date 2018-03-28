import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Main from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Login from './components/Login';
import Vendors from './components/Vendors/Vendors';
import shopData from './data/data'; 

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: shopData,
      filteredLocations: [],
      locationTypes: [],
      user: false,
      formSubmit: false
    };
  }

  render() {
    const { user, locations } = this.state;
    return (
      <Router>
        <div>
          <Nav user={user} />
          <main id='page-wrap'>
            <Switch>
              <Route exact path='/' render={() => <Main locations={locations}/>} />
              <Route path='/about' render={() => <About />} />
              <Route path='/places' render={() => <Main locations={locations}/>} />
              <Route path='/vendors' render={() => <Vendors user={user}/>} />
              <Route path='/login' render={() => <Login user={user}/>} />
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
