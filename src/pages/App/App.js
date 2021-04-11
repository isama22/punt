import './App.css';
import { Route, Switch } from 'react-router-dom';
import Projects from '../../components/Projects'
import Nav from '../../components/Nav/Nav'

function App() {
  return (
    <div className="App">
     <Nav />
      <h5>punt</h5>
      <Switch>

      <Route path='/projects' render={() => (<Projects />)} />
      </Switch>
    </div>
  );
}

export default App;
