import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

                                    

                                </div>

                                <div className="col-md-8">

                                    <p>My name is Eric Donohue. I am currently attending a full stack flex program/boot camp at University of
                                    California, Riverside. I am acquiring knowledge in programming languages such as HTML, CSS, JavaScipt, jQuery,
                                    among others. I am tasked with completing a number of assignments and projects, which includes building my portfolio.</p>

                                    <p>My career background includes data administrator responsibilities such as storing and organizing data,
                                    utilizing database design to create effective queries and exporting data, as well as troubleshooting varied
                                    issues as they arise. I hope to transition from the world of data to programming, and continuously build on my current knowledge to be more effective and provide quality web development products and hopefully more.</p>

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