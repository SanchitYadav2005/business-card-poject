import React from "react";
import twitter from "./img/twitter.png"
import linkedin from './img/linkedin.png'
import insta from "./img/insta.png"


console.log(twitter)
console.log(linkedin)
console.log(insta)

export default function Footer(){
    return(
        <footer className="foot">
            <img src={twitter} alt="social-media-links"/>
            <img src={linkedin} alt="social-media-links"/>
            <img src={insta} alt="social-media-links"/>
        </footer>
    )
}