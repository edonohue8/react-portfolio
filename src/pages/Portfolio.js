import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Importing images
import projectOne from "../assets/images/project-1.png";
import freebeez from "../assets/images/freebeez.png";
import burger from "../assets/images/burger.png";
import quiz from "../assets/images/quiz.png";
import planner from "../assets/images/planner.png";
import employee from "../assets/images/employee.png";
import workoutTracker from "../assets/images/workout-tracker.png";
import pwaBudget from "../assets/images/pwa-budget.png";
import googleBooksSearch from "../assets/images/google-books-search.png";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                        </h3>
                    </div>
                    <div className="card-body">

                            <div className="row">

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={projectOne} className="card-img-top" alt="commercial airliner jet pointing left saying Safety First on plane pic above title stating Safety First Travel above about section" />

                                    <article class="links">
                                        <a href="https://edonohue8.github.io/project-1/">Int'l Travel Decision Assistant</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/project-1">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={freebeez} className="card-img-top" alt="showing landing page of Freebeez App containing fields for logging in and displaying items on the right-side of the page" />

                                    <article class="links">
                                        <a href="https://project2-group5.herokuapp.com/">Freebeez App</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/Freebeez">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={burger} className="card-img-top" alt="Eat Da Burger app showing hamburger pic" />

                                    <article class="links">
                                        <a href="https://safe-citadel-99882.herokuapp.com/burgers">Eat Da Burger! Restaurant App</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/burger">Github Repo</a>
                                    </article>

                                </div>
                                
                            </div>

                            <br></br>
                            <br></br>
                            <br></br>

                            <div className="row">

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={quiz} className="card-img-top" alt="showing landing page for JavaScript Fundamentals Quiz containing buttons to begin quiz or view scoreboard" />

                                    <article class="links">
                                        <a href="https://edonohue8.github.io/code-quiz/">JavaScript Code Quiz</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/code-quiz">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={planner} className="card-img-top" alt="work day planner showing date and time slots" />

                                    <article class="links">
                                        <a href="https://edonohue8.github.io/work-day-planner/">Work-day Planner</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/work-day-planner">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={employee} className="card-img-top" alt="showing webpage displaying My Team followed by information such as name, job title, id, and contact info" />

                                    <article>
                                        Template Engine - Employee Summary
                                        <br></br>
                                        <a href="https://github.com/edonohue8/templateengine-employeesummary">Github Repo</a>
                                    </article>

                                </div>

                            </div>

                            <br></br>
                            <br></br>
                            <br></br>

                            <div className="row">

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={googleBooksSearch} className="card-img-top" alt="Google Books search page showing results including book images and descriptions" />

                                    <article class="links">
                                        <a href="https://afternoon-chamber-11662.herokuapp.com/">Google Books Search</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/google-books-search">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={workoutTracker} className="card-img-top" alt="workout dashboard showing charts and piecharts" />

                                    <article class="links">
                                        <a href="https://blooming-badlands-26752.herokuapp.com/">Workout Tracker</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/workout-tracker">Github Repo</a>
                                    </article>

                                </div>

                                <div className="col-md-1"></div>

                                <div className="col-md-3">

                                    <img src={pwaBudget} className="card-img-top" alt="pwa application showing chrome dev tools on the side" />

                                    <article class="links">
                                        <a href="https://glacial-reaches-67160.herokuapp.com/">PWA App: Online/Offline Budget Trackers</a>
                                        <br></br>
                                        <a href="https://github.com/edonohue8/pwa-budget-tracker">Github Repo</a>
                                    </article>

                                </div>

                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;