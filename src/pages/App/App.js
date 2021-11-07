import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../../components/Nav/Nav'

class App extends Component {

  state = {}

  render() {
    return (
      <div className="App">
        <div className='big-broider'>
          <Nav />
        </div>
        <Switch>
          <Route path='/' render={() => (<Home />)} />
          <Route path='/' render={() => (<Writing />)} />
          <Route path='/' render={() => (<Gestural />)} />
          <Route path='/' render={() => (<Figurative />)} />
          <Route path='/' render={() => (<Photo />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
