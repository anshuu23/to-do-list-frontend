import React from "react"

function CreateAccount(){
    function createAccountButtonClicked(){
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        console.log(name,email,password)

        
    }
    return (
        <div>

            <h2>Create Account</h2>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email"/>

            <label htmlFor="password">Set Password:</label>
            <input type="password" id="password" name="password"/>

            <button type="submit" onClick={createAccountButtonClicked}>Submit</button>
        </div>

    )
}

export default CreateAccount

