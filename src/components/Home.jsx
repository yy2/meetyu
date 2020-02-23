import React from "react";
import pic from "../images/profile.png";
import "../css/Home.css";
// import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home-container">
            <div className="profile-pic"><img src={pic} alt="profile pic of me"></img></div>
            <div>
                <h1>Hello</h1>
                <p>My name is Yu. You can pronounce is as "you". (I get asked this a lot)</p>
                <p>But you can call me Yui (you-ee) or in professional context just use both first and last name.</p>
                <p>I know, it can be quite confusing... or it can be ridiculously funny (depending on the situation).</p>
                <div className="meet-me-container">
                    <p>Enough talk... <Link to="/about" className="about">Meet Me!</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Home;