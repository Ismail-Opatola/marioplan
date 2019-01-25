import React from 'react'
import  moment  from 'moment';

const ProjectSummary = ({_project}) => {
  // // const createdDate = () => {moment(_project.createdAt.toString()).calender()};
  // console.log(_project.createdAt.toDate());
  // console.log(_project);
  // const createdDate = _project.createdAt.toDate();
  // moment(createdDate)
  return (
    <div>
     <div className='card z-depth-0 project-summary'> 
        <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{_project.title}</span>
            <p>Posted by { _project.authorFirstName } { _project.authorLastName }</p>
            <p className='grey-text'>{moment(_project.createdAt.toDate()).calendar()}</p>
        </div>
        </div> 
    </div>
  )
}

export default ProjectSummary
