import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rentals from "./pages/Rentals/Rentals"
import "./App.css";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import CommunityLanding from "./pages/CommunityLanding/CommunityLanding";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import lionsPage from "./pages/Lions/LionsPage";

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
            <Route exact path="/communitylanding" component={CommunityLanding} />
            <Route exact path="/loginpage" component={LoginPage} />
            <Route exact path="/signuppage" component={SignUpPage} />
            <Route exact path="/lions" component={lionsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
