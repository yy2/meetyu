import React from "react";
import "../css/Home.css";

function About() {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p>I graduated from University of Florida with a Bachelor's in Digital Arts and Sciences. 
                <div className="das-popup">What is DAS?
                    <span className="das-popup-text">DAS combines both computer science and arts into one degree. 
                    Student learn the same fundamentals as computer science majors, but also learn about animations 
                    and 3D modeling.</span>
                </div>
            </p>
            <p>I am currently working at JP Morgan and Chase as a software developer.</p> 
           

        </div>
    );
}

export default About;