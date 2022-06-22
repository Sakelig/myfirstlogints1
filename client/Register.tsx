import * as React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export function Register(){
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        console.log("wow")
        console.log(email)
        console.log(password)
    }

    return <div className={"preLoginContainer"}>
        This is a register page!
        <div style={{padding: 50}}/>
        <div className={"centerContent"}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input style={{width: 326}} className={"boxStyling"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Enter username..."} type="text"/>
                </div>
                <div>
                    <input style={{width: 326}} className={"boxStyling"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Enter email..."} type="text"/>
                </div>
                <div>
                    <input style={{width: 326}} className={"boxStyling"} value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder={"Enter email again..."} type="text"/>
                </div>
                <div>
                    <input style={{width: 326}} className={"boxStyling"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Enter password..."} type="password"/>
                </div>
                //TODO this cancel will submit the form when it should not
                <button style={{width: 160}} className={"boxStyling"} onClick={() => navigate("/")}>Cancel</button>
                <button style={{width: 160}} className={"boxStyling"}>Submit</button>

            </form>
        </div>
        <Link to={"/"}>Back</Link>
    </div>
}
