import React from "react";
import {Frontpage} from "./Frontpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Login} from "./Login";
import {Register} from "./Register";


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Frontpage/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Application/>)

