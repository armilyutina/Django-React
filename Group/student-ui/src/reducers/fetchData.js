import { FETCH_GROUP, FETCH_STUDENTS, REMOVE_GROUP, REMOVE_STUDENT, ADD_STUDENT, ADD_GROUP } from '../consts.js'


const initialState = []


export const getData = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_GROUP:
            return payload
        case REMOVE_GROUP:
            return state.filter(i => i.id !== payload)
        case ADD_GROUP:
            return [
                ...state, 
                {
                   ...payload
                }
            ]    
        default:
            return state
    }
}



export const getStudents = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_STUDENTS:
            return payload
        case REMOVE_STUDENT:
            return state.filter(i => i.id !== payload)
        case ADD_STUDENT: 
            return [
                ...state, 
                {
                    ...payload
                }
            ]
        default:
            return state
    }
}
