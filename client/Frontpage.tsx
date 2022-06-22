import * as React from 'react'
import {Link} from "react-router-dom";

export function Frontpage(){
    return <div className={"viewContainer"}>
        <h1>Login in or register!</h1>
        <br/>
        <div>
            <Link to={'/login'}>Login</Link>
        </div>
        <div>
            <Link to={'/register'}>Register</Link>
        </div>
    </div>
}
