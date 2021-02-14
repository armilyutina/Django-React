import React, { useEffect, useState } from 'react';
import { fetchStudents, addStudent, removeStudent } from './actions/actions'
import {connect} from 'react-redux'
import "./style.css"


const Students = ({ getStudents, getData, fetchStudents, match, removeStudent, addStudent}) => {

    const n = match.params.id
    

    useEffect(()=>{
        fetchStudents(n)
    }, [n])


    const [state, setState] = useState('')

    const handleChange = event => setState(event.target.value)

    const handleClick = () => {
        const [name, surname, fathersname] = state.split(' ')
        const obj = { id: getStudents.length > 0 ? getStudents.length + 1 : 1, name, 
                        surname, fathersname, 
                        number: getData[n-1].number }
        addStudent(obj)
        setState('')
    }
    

    return( 
        <div>
            <h2 className = "title">LIST OF STUDENTS</h2>
            <div className = "ul">
                <input className = "input" placeholder = "Surname Name Fathersname" value = {state}  onChange = {handleChange} />
                <button className = "button" onClick = {handleClick}>ADD</button>
            </div>

            <ul className = "ul">
                {getStudents.map(i => 
                    <li key = {i.id} className = "li">
                        <div className = "link">
                                {i.surname} {i.name} {i.fathersname}
                        </div>
                
                        <p className = "icon">
                            <i className="fa fa-trash" onClick = {()=>removeStudent(i.id)} />
                        </p>
                    </li>
                )}
            </ul>
            
        </div>
    );
}

const mapStateToProps = state => ({
    getStudents: state.getStudents,
    getData: state.getData
  })
  
  
const mapDispatchToProps = {fetchStudents, addStudent, removeStudent}



export default connect(mapStateToProps, mapDispatchToProps)(Students)