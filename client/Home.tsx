import * as React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function Home() {

    const [user, setUser] = useState({})
    let navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    function handleLogout(){
        localStorage.clear()
        setUser({})
        navigate("/")
    }


    return <div className={"viewContainer"}>
        <div style={{display:"flex", alignContent: "space-between", justifyContent: "space-around"}}>
            <div>Welcome {user.username}!
            </div>
            <div>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
        <br/>
        <div className={"centerContent"}>
            <p>Toggle and click save on the games and areas of the game you want to receive emails about!</p>

        </div>
    </div>;
}
