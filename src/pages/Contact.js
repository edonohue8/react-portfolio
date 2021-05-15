import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Importing file
import resume from "../assets/eric-donohue-resume.pdf";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Contact</h3>
                    </div>
                    <div className="card-body">

                        <div>

                            <div>Name</div>
                            <div>Eric Donohue</div>

                            <br></br>

                            <div>E-mail</div>
                            <div>ericdon10@icloud.com</div>

                            <br></br>

                            <div>Phone Number</div>
                            <div>(323) 546-2748</div>

                            <br></br>

                            <div>GitHub</div>
                            <div><a href="https://github.com/edonohue8">Click here for link</a></div>

                            <br></br>

                            <div>LinkedIn</div>
                            <div><a href="https://www.linkedin.com/in/ericdonohue/">Click here for link</a></div>

                            <br></br>

                            <div>Resume</div>
                            <div><a href={resume}>Click here for resume</a></div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact;