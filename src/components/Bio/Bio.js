// import { Link } from 'react-router-dom';
import './Bio.css'

function Bio() {
    return (
        <div className="bio">
            <div class="avatar-border">
                <div class="avatar">
                    {/* <div class="hover-div">
                        <img class="waters" src="https://i.postimg.cc/qqnbMtxy/Screen-Shot-2021-04-07-at-1-58-03-PM.png" alt="" />
                    </div> */}
                    <a href="https://www.instagram.com/30yroldgirl/" target="_blank">
                        <img class="avatar-img"
                            src="https://i.postimg.cc/1tfmJ4m4/Screen-Shot-2020-03-17-at-9-16-20-PM.png" alt="" />
                    </a>

                </div>
            </div>
        </div>

    );
}

export default Bio;