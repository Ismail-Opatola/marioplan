import React from 'react'

const ProjectDetails = (props) => {

    // //props from route to access match params, history etc
    // console.log(props)
    // ......................

    const id = props.match.params.id;


  return (
    <div className='container section project-details'>
    <div className='card z-depth-0'>
      <div className='card-content'>
        <span className='card-title'>Project Title - {id}</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
        <div>Posted by the Net Ninja</div>
        <div>2nd September, 2am 2019</div>


        </div>

      </div>
    </div>
  )
}

export default ProjectDetails
