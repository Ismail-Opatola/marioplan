// use thunk to return a func

export const __createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to db : add new project to firestore
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Ryu",
            authorLastName: "Yoshi",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        });
    }
}