import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    __auth: authReducer,
    __project: projectReducer,
    __firestore: firestoreReducer
})

export default rootReducer