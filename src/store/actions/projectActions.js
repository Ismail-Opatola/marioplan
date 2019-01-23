export const __createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirstore }) => {
        // make async call to db
        dispatch({ type: 'CREATE_PROJECT', project: project})
    }
}