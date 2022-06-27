import * as React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function Home() {
    const [isOslo, setIsOslo] = useState(false)
    const [isBergen, setIsBergen] = useState(false)
    const [isTrondheim, setIsTrondheim] = useState(false)
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


    function handleSubmit(event) {
        event.preventDefault()
        console.log(isOslo)
        console.log(isTrondheim)
        console.log(isBergen)
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
            Current settings:
            ...
        </div>
        <br/>
        <div className={"centerContent"}>
            <div>
                 Toggle and click save on the games and areas of the game you want to receive emails about!
            </div>
        </div>
        <br/>

        <div className={"centerContent"}>
            <form onSubmit={handleSubmit}>
                Select the areas you want to get notifications from
                <div>
                    <input type="checkbox" id={"Oslo"} name={"Oslo"} checked={isOslo} onChange={() => setIsOslo(!isOslo)}/> Oslo
                </div>
                <div>
                    <input type="checkbox" id={"Bergen"} name={"Bergen"} checked={isBergen} onChange={() => setIsBergen(!isBergen)}/> Bergen
                </div>
                <div>
                    <input type="checkbox" id={"Trondheim"} name={"Trondheim"} checked={isTrondheim} onChange={() => setIsTrondheim(!isTrondheim)}/> Trondheim
                </div>
                <button>Save changes</button>
            </form>
        </div>
    </div>;
}
