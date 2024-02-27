import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate();
    const handleLogout = () => {
        axios.get("http://localhost:5000/logout").then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                nav("/login");
            }
        }).catch((err) => console.log(err));
    }
    return (
        <>
            <p>Home</p>
            <button><Link to="/dashboard">DashBoard</Link></button>
            <br></br>
            <br></br>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home