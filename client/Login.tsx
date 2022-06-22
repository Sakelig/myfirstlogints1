import * as React from "react"
import {Link} from "react-router-dom";
import {useState} from "react";

export function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log("wow")
        console.log(username)
        console.log(password)
    }


    return <div className={"preLoginContainer"}>
        Hello!
        <div className={"centerContent"}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className={"boxStyling"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Username"} type="text"/>
                    </div>
                    <div>
                        <input className={"boxStyling"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} type="password"/>
                    </div>
                    <div>
                        <button style={{width: 199}} className={"boxStyling"} >Login</button>
                    </div>
                </form>
            </div>
            <Link to={"/"}>Back</Link>
        </div>
    </div>
}
