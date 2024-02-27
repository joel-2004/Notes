import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const nav = useNavigate();
    const [data, setData] = useState({ name: "", password: "", confirmPassword: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);

        if (data.password !== data.confirmPassword) {
            alert("Password does not match");
            return;
        }
        const newData = { name: data.name, password: data.password };
        const res = await axios.post("http://localhost:5000/signup", newData)
        console.log(res);
        if (!res.data.message)
            nav("/Login");

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
                Confirm  Password <input type='text' name="confirmPassword" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                <br></br>
                <br></br>
                <button type='click' onClick={handleSubmit}>Submit</button>
                <br></br>
                <br></br>
                <Link to="/Login">Aldready a user?</Link>
            </form>
        </>
    )
}

export default Signup