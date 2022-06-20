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


    return <div>
        Hello!
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Username"} type="text"/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} type="password"/>
                    <button>Submit
                    </button>
                </form>
            </div>
            <Link to={"/"}>Back</Link>
        </div>
    </div>
}
