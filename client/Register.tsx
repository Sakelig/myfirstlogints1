import * as React from 'react'
import {Link} from "react-router-dom";
import {useState} from "react";

export function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log("wow")
        console.log(email)
        console.log(password)
    }

    return <div className={"preLoginContainer"}>
        This is a register page!
        <div>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} type="text"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} type="password"/>
                <button>Submit</button>
            </form>
        </div>
        <Link to={"/"}>Back</Link>
    </div>
}
