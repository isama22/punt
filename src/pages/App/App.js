import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../../components/Nav/Nav'
import Writing from '../../pages/Writing/Writing'
import Gestural from '../../pages/Gestural/Gestural'
import Figurative from '../../pages/Figurative/Figurative'
import Home from '../../pages/Home/Home'
import Photo from '../../pages/Photo/Photo'

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
          <Route path='/writing' render={() => (<Writing />)} />
          <Route path='/gestural' render={() => (<Gestural />)} />
          <Route path='/figurative' render={() => (<Figurative />)} />
          <Route path='/photo' render={() => (<Photo />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
