import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Importing images
import chitterchatter from "../assets/images/chitterchatter.png";
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

                                <img src={chitterchatter} className="card-img-top" alt="chitter chatter landing page displaying logo, buttons to create account and login" />

                                <article class="links">
                                    <a href="https://chitterchatter-app-ed.herokuapp.com">Chitter Chatter</a>
                                    <br></br>
                                    <a href="https://github.com/bbrintle/chitter-chatter">Github Repo</a>
                                    <br></br>
                                    <p>Morale booster/community builder app to help put productivity back in the workplace</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={freebeez} className="card-img-top" alt="showing landing page of Freebeez App containing fields for logging in and displaying items on the right-side of the page" />

                                <article class="links">
                                    <a href="https://project2-group5.herokuapp.com/">Freebeez App</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/Freebeez">Github Repo</a>
                                    <br></br>
                                    <p>App to post and claim free items with a fun bee theme</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={projectOne} className="card-img-top" alt="commercial airliner jet pointing left saying Safety First on plane pic above title stating Safety First Travel above about section" />

                                <article class="links">
                                    <a href="https://edonohue8.github.io/project-1/">Int'l Travel Decision Assistant</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/project-1">Github Repo</a>
                                    <br></br>
                                    <p>App for airline travelers to access travel advisory information, flight quotes, and news</p>
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
                                    <br></br>
                                    <p>Timed JavaScript fundamentals quiz with specific criteria</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={planner} className="card-img-top" alt="work day planner showing date and time slots" />

                                <article class="links">
                                    <a href="https://edonohue8.github.io/work-day-planner/">Work-day Planner</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/work-day-planner">Github Repo</a>
                                    <br></br>
                                    <p>Calendar application to be productive</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={employee} className="card-img-top" alt="showing webpage displaying My Team followed by information such as name, job title, id, and contact info" />

                                <article>
                                    Template Engine - Employee Summary
                                    <br></br>
                                    <a href="https://github.com/edonohue8/templateengine-employeesummary">Github Repo</a>
                                    <br></br>
                                    <p>Node CLI that takes user-entered data about employees and generates a HTML webpage displaying that content</p>
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
                                    <br></br>
                                    <p>App to search the Google Books database and save your favorite books</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={workoutTracker} className="card-img-top" alt="workout dashboard showing charts and piecharts" />

                                <article class="links">
                                    <a href="https://blooming-badlands-26752.herokuapp.com/">Workout Tracker</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/workout-tracker">Github Repo</a>
                                    <br></br>
                                    <p>Workout tracker application utilizing MongoDB Atlas</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={pwaBudget} className="card-img-top" alt="pwa application showing chrome dev tools on the side" />

                                <article class="links">
                                    <a href="https://glacial-reaches-67160.herokuapp.com/">PWA App: Online/Offline Budget Trackers</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/pwa-budget-tracker">Github Repo</a>
                                    <br></br>
                                    <p>Budget Tracker app to allow for offline access</p>
                                </article>

                            </div>

                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="row">

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                <img src={burger} className="card-img-top" alt="Eat Da Burger app showing hamburger pic" />

                                <article class="links">
                                    <a href="https://safe-citadel-99882.herokuapp.com/burgers">Eat Da Burger! Restaurant App</a>
                                    <br></br>
                                    <a href="https://github.com/edonohue8/burger">Github Repo</a>
                                    <br></br>
                                    <p>Burger logger app utilizing MySQL, Node, Express, Handlebars, and an ORM</p>
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                {/* <img src={app} className="card-img-top" alt="text" /> */}

                                <article class="links">
                                    {/* <a href="#">App</a>
                                    <br></br>
                                    <a href="#">Github Repo</a> */}
                                </article>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">

                                {/* <img src={app} className="card-img-top" alt="text" /> */}

                                <article class="links">
                                    {/* <a href="#">App</a>
                                    <br></br>
                                    <a href="#">Github Repo</a> */}
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