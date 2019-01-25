// use thunk to return a func

export const __createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to db : add new project to firestore
        const firestore = getFirestore();
        const profile = getState().__firebase.profile;
        const authorId = getState().__firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        });
    }
}