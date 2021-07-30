import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="broider">
            <div className="nav">
                <Link to='/'>/•/•/</Link>
                &nbsp;
                <Link to='/hello'>writings</Link>
                &nbsp;
                <Link to='/projects'>𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀</Link>
                &nbsp;
                <Link to='/blog'>𝗯𝗹𝗼𝗴</Link>
            </div>
        </div>
    );
}

export default Nav;