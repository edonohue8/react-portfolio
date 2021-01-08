import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;