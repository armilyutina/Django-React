import axios from 'axios'
import { FETCH_GROUP, REMOVE_GROUP, FETCH_STUDENTS, REMOVE_STUDENT, ADD_STUDENT, ADD_GROUP } from '../consts.js'

export const fetchGroup = () => async dispatch => {
    const response = await axios({
        method: "GET",
        url: 'http://127.0.0.1:8000/api/group'
    })

    dispatch({
        type: FETCH_GROUP,
        payload: response.data
    })
}


export const removeGroup = payload => ({
    type: REMOVE_GROUP,
    payload
})


export const addGroup = payload => ({
    type: ADD_GROUP,
    payload
})





export const fetchStudents = id => async dispatch => {
    const response = await axios({
        method: "GET",
        url: `http://127.0.0.1:8000/api/group/${id}`
    })

    dispatch({
        type: FETCH_STUDENTS,
        payload: response.data.students
    })
}


export const removeStudent = payload => ({
    type: REMOVE_STUDENT,
    payload
})


export const addStudent = payload => ({
    type: ADD_STUDENT,
    payload
})