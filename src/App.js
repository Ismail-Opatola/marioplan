import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// headon to firebase console>>Hosting>>follow instructions ... firebase deploy
// before we say $ firebase deploy we actually have to build our react app and put it into the /dist folder ... npm run build or yarn build
// actually its put into a /build folder but since we have specified /dist folder as our deployment folder during $ firebase init, so let's move the build content into the /dist folder ... it would be the folder deployed automatically when we $ firebase deploy
// $ firebase deploy