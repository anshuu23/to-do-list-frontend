import React from "react";
import Head from "./Header";
import { useState } from "react";
import { useContext } from "react";
import { tokenContext } from "../ContextApi/constext";
function Home() {
    const token = useContext(tokenContext)
    const accessToken = localStorage.getItem('accessToken')
    console.log("🚀 ~ Home ~ accessToken:", accessToken)

    const [taskToAdd, setTaskToAdd] = useState('')



    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setTaskToAdd(value)
    }

    const btnClicked = (e) => {
        e.preventDefault();
        console.log(typeof taskToAdd)

        fetch('http://localhost:3000/tasks', {
            method: "post",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "taskName": taskToAdd,
                "isComplited": 'false'
            })
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Head />
            <form>
                <h1>create task</h1>
                <input type='text' placeholder="enter task" onChange={handelInputChange} name='taskToAdd' />
                <button onClick={btnClicked}>create task</button>
            </form>

        </div>
    )

}

export default Home;
