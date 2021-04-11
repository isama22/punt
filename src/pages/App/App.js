import './App.css';
import { Route, Switch } from 'react-router-dom';
import Projects from '../../pages/Projects/Projects'
import Blog from '../../pages/Blog/Blog'
import Nav from '../../components/Nav/Nav'
import Home from '../../pages/Home/Home'
import Bio from '../../components/Bio/Bio'

function App() {
  return (
    <div className="App">
      <div className='big-broider'>
     <Nav />
     <div className="main">
     <Bio />  
     </div>
      </div>
      <Switch>
      <Route path='/projects' render={() => (<Projects />)} />
      <Route path='/blog' render={() => (<Blog />)} />
      <Route path='/' render={()=> (<Home />)} />
      </Switch>
    </div>
  );
}

export default App;
