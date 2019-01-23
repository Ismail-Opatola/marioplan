import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'

export class Dashboard extends Component {

  render() {
    const { projects } = this.props

    return (
      <div className='dashboard container'>
        <div className='row'>
            <div className='col s12 m6'>
                <ProjectList _projects={projects} />
            </div>
            <div className='col s12 m5 offset-m1'>
                <Notifications />
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      projects: state.__project.projects
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
