import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({_projects}) => {
  return (
    <div className='project-list section'>
        { _projects && _projects.map(project => {
          return (
            <ProjectSummary _project={project} key={project.id} />
          )
        })}
    </div>
  )
}

export default ProjectList
