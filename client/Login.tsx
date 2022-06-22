import * as React from "react"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        console.log("wow")
        console.log(username)
        console.log(password)
    }


    return <div className={"preLoginContainer"}>
        Hello!
        <div style={{padding: 40}}/>
        <div className={"centerContent"}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input style={{width: 326}} className={"boxStyling"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Username"} type="text"/>
                    </div>
                    <div>
                        <input style={{width: 326}} className={"boxStyling"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} type="password"/>
                    </div>
                    <div>
                        <button style={{width: 326}} className={"boxStyling"} >Login</button>
                    </div>
                    <div style={{padding: 20}}/>
                </form>
                <div>
                    <button className={"boxStyling"} onClick={() => navigate("/")}>Register</button>
                    <button className={"boxStyling"}>Forgot password</button>
                    <button className={"boxStyling"}>Play as Guest</button>
                </div>
            </div>
        </div>
    </div>
}
