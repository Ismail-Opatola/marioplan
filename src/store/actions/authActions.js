export const signIn = (credentials) => {
//using thunk to alt the dispatch process and return a func instead
  return (dispatch, getState, {getFirebase}) => {
      //use to sign the user in
      const firebase = getFirebase();

      firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
      ).then(() => {
          dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
      });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();

      firebase.auth().signOut().then(() => {
          dispatch({ type: 'SIGNOUT_SUCCESS' })
      }).catch((err) => {
        dispatch({ type: 'SIGNOUT_ERROR', err });
      });
  }
}
