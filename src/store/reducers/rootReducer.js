import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    __auth: authReducer,
    __project: projectReducer,
    __firestore: firestoreReducer,
    __firebase: firebaseReducer,
    firebase: firebaseReducer
})

export default rootReducer

//===========
// Note
// ==============
// I use the Underscores '__' to track my code, but on branch #26--waiting-for-auth, firstore Auth expects firestore as Reducer not my custom __firestore. In order to keep my tracker, i dub the code __firestore to firestore hence both point to the same firebaseReducer