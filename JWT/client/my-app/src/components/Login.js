import React, { useState } from 'react'
import axios, { Axios } from "axios";
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
    axios.defaults.withCredentials = true;
    const nav = useNavigate();
    const [data, setData] = useState({ name: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        const res = await axios.post("http://localhost:5000/login", data)
        console.log(res);
        if (res.status === 200)
            nav("/");
    }
    return (
        <>
            <form>
                Name <input type='text' name="name" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} ></input>
                <br></br>
                <br></br>
                Password <input type='text' name="password" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                <br></br>
                <br></br>
                <button type='click' onClick={handleSubmit}>Submit</button>
                <br></br>
                <br></br>
                <Link to="/Signup">Create an acoount</Link>
            </form>
        </>
    )
}

export default Login