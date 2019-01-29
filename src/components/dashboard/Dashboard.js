import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'

export class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;

    // check if user not signedin redirect to signin page
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList _projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications _notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    // projects: state.__project.projects
    projects: state.__firestore.ordered.projects,
    auth: state.__firebase.auth,
    notifications: state.__firestore.ordered.notifications
  };
};

// const mapDispatchToProps = {

// }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
])
)(Dashboard);
