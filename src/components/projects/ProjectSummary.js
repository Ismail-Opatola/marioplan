import React from 'react'

const ProjectSummary = ({_project}) => {
  return (
    <div>
     <div className='card z-depth-0 project-summary'> 
        <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{_project.title}</span>
            <p>Posted by { _project.authorFirstName } { _project.authorLastName }</p>
            <p className='grey-text'>3rd Sept, 2am 2019</p>
        </div>
        </div> 
    </div>
  )
}

export default ProjectSummary
