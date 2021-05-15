import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Importing images
import profilePic from "../assets/images/profile-pic-screengrab.png";

const About = () => {
    return (
        <div className="about">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                        </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">

                                    <img src={profilePic} alt="profile pic of Eric Donohue" width="100%" height="auto%" />

                                </div>

                                <div className="col-md-8">

                                    <p>Proficient Full Stack Web Developer & Database Administrator (DBA) with 9+ years of experience designing, coding, and testing database solutions in MySQL environment. Received Coding Bootcamp certificate. Seeking to use proven database administrator skills to develop and improve professional websites.</p>

                                    <p>Please see above for links to my portfolio and contact information.</p>

                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;