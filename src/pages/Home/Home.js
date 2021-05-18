import './Home.css'
import Bio from '../../components/Bio/Bio'

function Home() {
    return (
        <div className="home">
            {/* <div className="main"> */}
            <Bio />
            {/* </div> */}
            <div className="home-box">
                <div className="home-broider">
                    <div className="home-inner-broider">
                      <div className="post">
                          post!
                      </div>
                      <div className="post">
                          post!
                      </div>
                      <div className="post">
                          post!
                      </div>
                      <div className="post">
                          post!
                      </div>
                      <div className="post">
                          post!
                      </div>
                      <div className="post">
                          post!
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;