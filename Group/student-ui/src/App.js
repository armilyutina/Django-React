import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchGroup, removeGroup, addGroup } from './actions/actions.js'
import { Link } from 'react-router-dom'


import "./style.css"
import axios from 'axios';

function App({fetchGroup, getData, removeGroup, addGroup}) {

  useEffect(()=>{
    fetchGroup()
  }, [])

  const size = getData.length
  
  const [group, setGroup] = useState('')
  const [faculty, setFaculty] = useState('')
  

  const handleChangeGroup = event => {
    setGroup(event.target.value)
  }

  const handleChangeFaculty = event => {
    setFaculty(event.target.value)
  }


  const handleClick = () => {
    if((group.length == 3) && (faculty !== '')) {
      const obj = { id: size + 1, number: group, course: group[0], faculty}
      addGroup(obj)
    }

    setGroup('')
    setFaculty('')
  }

  return (
    <div className = "app">
      <h1 className = "title">ADD GROUP</h1>
      <div className = "ul">
          <input  className = "input" value = {group} onChange = {handleChangeGroup}  placeholder = "000"/>
          <input  className = "input" value = {faculty} onChange = {handleChangeFaculty} placeholder = "0" />
          <button className = "button" type = "button" onClick = {handleClick}>ADD</button>
      </div>

      <p className = "title"> LIST OF GROUPS </p>
      <ul className="ul">
          {getData.map(i => 
            <li className = "li" key = {i.id}>
              <Link className = "link" to = {{ pathname: `/group/${size + 1}`, fromDashboard: false}}>
                  {i.number}
              </Link>
              <p className = "icon">
                <i className="fa fa-trash" onClick = {()=>removeGroup(i.id)} />
              </p>
            </li>)
          }
      </ul>
    </div>
  );
}


const mapStateToProps = state => ({
  getData: state.getData
})


const mapDispatchToProps = {fetchGroup, removeGroup, addGroup}

export default connect(mapStateToProps, mapDispatchToProps)(App);
