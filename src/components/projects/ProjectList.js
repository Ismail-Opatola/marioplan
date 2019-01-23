import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({_projects}) => {
  return (
    <div className='project-list section'>
        { _projects && _projects.map(project => {
          return (
            <Link to={'/project/' + project.id} >
              <ProjectSummary _project={project} key={project.id} />
            </Link>
          )
        })}
    </div>
  )
}

export default ProjectList
