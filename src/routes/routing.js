import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Nav from "../components/nav";
import Students from "../components/students";

export default function Routing() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Students />
    </Router>
  );
}
