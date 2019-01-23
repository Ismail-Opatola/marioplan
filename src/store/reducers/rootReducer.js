import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    __auth: authReducer,
    __project: projectReducer
})

export default rootReducer