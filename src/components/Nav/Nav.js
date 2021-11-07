import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="broider">
            <div className="nav">
                <Link to='/'>(´･ᴗ･ ` )</Link>
                &nbsp;
                <Link to='/writing'>writing</Link>
                &nbsp;
                <Link to="/gestural">gestural</Link>
                &nbsp;
                <Link to="/figurative">figurative</Link>
                &nbsp;
                <Link to="/photo">photo</Link>
            </div>
        </div>
    );
}

export default Nav;