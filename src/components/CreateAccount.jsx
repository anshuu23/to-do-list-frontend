import React , {useState , useEffect} from "react"
import Head from "./Header"
import "../css/createAccount.css"
function CreateAccount(){

    const [value , changeValue]  =useState(true)

    function createAccountButtonClicked(){
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        console.log(name,email,password)

        fetch('http://localhost:4000/' , {
            body: JSON.stringify({name , email , password}) ,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        .then((data)=>{
            if(data.status == 200){
                changeValue(false)
            }
            return data.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

   
        return (
            <div>
                <Head />    
                <main>
                    <div className="wrapper">
                        <h2>Create Account</h2>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"/>
    
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email"/>
    
                        <label htmlFor="password">Set Password:</label>
                        <input type="password" id="password" name="password"/>
    
                        <button type="submit" onClick={createAccountButtonClicked}>Submit</button>
                        </div>
                </main>
            </div>
    
        )
    }
    


export default CreateAccount

