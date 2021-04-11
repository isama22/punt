import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
      <div className="nav">
          <Link to='/'>Home</Link>
          &nbsp;
          <Link to='/projects'>Projects</Link>
      </div>
    );
  }
  
  export default Nav;