import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const GroupDetailView = ({ match }) => {

    const [data, setData] = useState([])
    const [students, setStudents] = useState([])
    const id = match.params.id

    useEffect(()=>{
        axios({
            method: "GET", 
            url: `http://127.0.0.1:8000/api/group/${id}`
        }).then(response => {
            setData(response.data)
            setStudents(response.data.students)
        })
    }, [id])


    return(
        <div>
            <span>Group number: {data.number}</span>
            <span>Course number {data.course}</span>
            <span>Faculty number {data.faculty}</span>



            <div className = "row">

            {students.map(s => 
                <div>
                    <span>{s.surname}</span>
                    <Link to = {{ pathname: `student/${s.id}`, fromDashboard: false }}>
                        Details
                    </Link>
                </div>   
            )}

            </div>
        </div>
    )
}





export const StudentDetailView = ({ match }) => {

    const [student, setStudent] = useState([])
    const id = match.params.id

    useEffect(()=>{
        axios({
            method: "GET", 
            url: `http://127.0.0.1:8000/api/student/${id}`
        }).then(response =>
            setStudent(response.data)
        )
    }, [id])

    return(
        <div>
            <span>Name: {student.name}</span>
            <span>Surname {student.surname}</span>
            <span>Father's name{student.fathersname}</span>
        </div>
    )
}