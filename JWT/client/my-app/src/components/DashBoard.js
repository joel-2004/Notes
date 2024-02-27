import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    axios.defaults.withCredentials = true;
    const nav = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:5000/auth").then((res) => {
            if (res.status == 200) {
                // console.log("dasdada");
                console.log(res.data);
                // console.log(res);
            }
            else {
                //console.log("nav");
                nav("/");
            }
        }).catch((err) => {
            console.log(err);
            nav("/");
        })

    }, [])
    return (
        <div>DashBoard</div>
    )
}

export default DashBoard