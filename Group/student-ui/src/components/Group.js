import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import './Group.css'

export const Wrapper = ({ children }) => 
    <>
        <Navbar />
            {children}
        <Footer />
    </>

export const Footer = () => <h3>Its footer</h3>


export const Navbar = () => {

    const [group, setGroup] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/group'
        }).then(response => {setGroup(response.data)})
    }, [])

    
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                    {group.map(g => 
                        <li class="nav-item">
                            <Link class="nav-link active" to = {{ pathname: `/group/${g.id}`, fromDashboard: false }}>
                                {g.number}
                            </Link>
                        </li>
                        )
                    }   
                    </ul>
                    </div>
                </div>
        </nav>
        </>
    )
}
