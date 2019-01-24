import React, { Component } from 'react'
import { connect } from 'react-redux'
import { __createProject } from '../../store/actions/projectActions'
class CreateProject extends Component {
    state = {
        title: null,
        content: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)

        // pass this.state to createProject: below in mapDispatchToProps
        this.props.createProject(this.state)
    }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Create New Project</h5>
            <div className='input-feild'>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' onChange={this.handleChange} />
            </div>
            <div className='input-feild'>
                <label htmlFor='content'>Project Content:</label>
                <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
            </div>
            <div className='input-feild'>
                <button className='btn pink lighten-1 z-depth-0'>Create</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        // we want to add this method to the props
        createProject: (project) => dispatch(__createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
