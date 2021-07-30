import './Home.css'
import Bio from '../../components/Bio/Bio'

function Home() {
    return (
        <div className="home">
            <Bio />
            <div className="home-box">
                <div className="home-broider">
                    <div className="home-inner-broider">
                    <div className="inner-broider-2">
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
        </div>
    );
}

export default Home;