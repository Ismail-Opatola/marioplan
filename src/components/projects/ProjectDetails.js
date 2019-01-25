import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {

    const { project, auth } = props;
    
    // check if user not signedin redirect to signin page
    if (!auth.uid) return <Redirect to='/signin' />

    if(project) {
     return( <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>{ project.title }</span>
          <p>{ project.content }</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>)
    } else {
      return (
          <div className='container center'>
            <p>Loading project...</p>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  console.log(ownProps)
  const id = ownProps.match.params.id;
  const projects = state.__firestore.data.projects;
  // grab each project
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.__firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)

// Notes on lesson #32--Firestore-Security-Rules)
// Define who can read, create, delete, write or update 'projects, users' collection.
// firestore auth Security Rules set on console, test simulation and Publish Security Rules
// https://console.firebase.google.com/u/0/project/mario-plan-2dd0c/database/firestore/rules