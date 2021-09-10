import React from 'react'
import './Home.css'
import Bio from '../../components/Bio/Bio'

function Home() {
    return (
        <div className="home">
            <Bio />
            <div className="home-box">
                {/* <div className="post">
                    post!
                </div> */}
            </div>
        </div>
    );
}

export default Home;