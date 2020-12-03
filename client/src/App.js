import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rentals from "./pages/Rentals/Rentals"
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Community from "./pages/Community/Community"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/community" component={Community} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
