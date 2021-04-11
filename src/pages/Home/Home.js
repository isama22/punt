import './Home.css'
import Bio from '../../components/Bio/Bio'

function Home() {
    return (
        <div className="home">
            {/* <div className="main"> */}
                <Bio />
            {/* </div> */}
            <div className="home-box">
                     <h1>home</h1> 
            </div>
      

        </div>
    );
}

export default Home;