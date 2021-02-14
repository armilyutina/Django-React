import { combineReducers } from 'redux'
import { getData, getStudents } from './fetchData.js'


const rootReducer = combineReducers({
    getData, 
    getStudents
})




export default rootReducer;