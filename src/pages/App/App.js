import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Projects from '../../pages/Projects/Projects'
import Blog from '../../pages/Blog/Blog'
import Nav from '../../components/Nav/Nav'
import Home from '../../pages/Home/Home'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {

  state = {}

  render() {
    return (
      <div className="App">
        <div className='big-broider'>
          <Nav />
        </div>
        <Switch>
          <Route path='/projects' render={() => (<Projects />)} />
          <Route path='/blog' render={() => (<Blog />)} />
          <Route path='/' render={() => (<Home />)} />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}

            />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage

            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
