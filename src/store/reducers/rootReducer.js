import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    __auth: authReducer,
    __project: projectReducer,
    __firestore: firestoreReducer,
    __firebase: firebaseReducer
})

export default rootReducer