import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="broider">
      <div className="nav">
          <Link to='/'>Home</Link>
          &nbsp;
          <Link to='/hello'>Hello</Link>
          &nbsp;
          <Link to='/projects'>Projects</Link>
          &nbsp;
          <Link to='/blog'>Blog</Link>
      </div>
        </div>
    );
  }
  
  export default Nav;