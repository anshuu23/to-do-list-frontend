import React, { useState } from "react";
import Head from "./Header";
import "../css/createAccount.css";

import { useContext } from "react";
import { tokenContext } from "../ContextApi/constext";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

    const tokenData = useContext(tokenContext)
    const navigate= useNavigate()
        
    
    const [user , setUser] = useState({
        userName : '',
        email : '',
        password : '',
    })

    const handelUserInput = (e) =>{
        const {name , value} = e.target;
        setUser((prev) => ({
            ...prev , [name]:value
        }))
    }

    const btnClicked = (e) =>{
        e.preventDefault();
        // console.log(user.userName )
        fetch('https://to-do-list-backend-ykse.onrender.com/createAccount' , {
            method:'POST',
            body:JSON.stringify({
                name:user.userName, 
                email:user.email,
                password:user.password
            }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            console.log('data send from server= ',data)
            console.log('extracted token =' , data.token)
            // console.log('context api' , tokenData)
            // tokenData.setToken(data.token)
            localStorage.setItem("accessToken",data.token)
            navigate('/')

        })
        .catch((err)=>{
            console.log(err)
        }).finally(()=>{
            console.log('token inside context api = ' , tokenData.token)

        })

       

    }
    return (
        <div>
            <Head />
            <main>
                <div className="wrapper">
                    <h2>Create Account</h2>
                    
                    <form action="">

                        <label htmlFor="name">Name</label>
                        <input type="text" name="userName" value={user.userName} onChange={handelUserInput} />

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={user.email} onChange={handelUserInput} />

                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={user.password} onChange={handelUserInput} />
                {JSON.stringify(tokenData.token)}

                        <button onClick={btnClicked}>Create Account</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CreateAccount;
