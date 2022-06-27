import * as React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function Home() {

    const [user, setUser] = useState("")
    let navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    function handleLogout(){
        localStorage.removeItem('user')
        navigate("/")
    }


    return <div>
        hi {user.username}

        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    </div>;
}
