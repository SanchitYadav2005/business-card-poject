import React from "react";
import face from "./img/f.jpg"


console.log(face)

export default function Header() {
    return(
        <header className="header">
            <img src={face} alt="logo" className="main-img"/>
            <h1 className="name">Sanchit Yadav</h1>
            <h2 className="prof">Full Stack Developer</h2>
            <h3 className="web">sanchityadav.com</h3>
            <button className="btn">Email</button>
        </header>
    )
}