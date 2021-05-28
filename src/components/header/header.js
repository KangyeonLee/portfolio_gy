import react, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'

import '../../css/header.css'


export default function Header(){
    const [isOpen, setOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(()=>{
        const onScroll = e =>{
            if (window.innerWidth < 1001 && (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
                document.getElementById("header").style.height = "80px";
            } else {
                document.getElementById("header").style.height = "150px";
            }
        }
        window.addEventListener("scroll", onScroll);

        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    },[scrollTop])

    const toggleOverlay = () =>{
        var overlay = document.getElementById("overlay")
        var contents = document.getElementById("overlay-contents")

        if(overlay.className.includes("enabled")){
            overlay.classList.remove("enabled")
            contents.classList.remove("enabled") 
            setOpen(false)
        }else{
            overlay.classList.add("enabled")
            contents.classList.add("enabled") 
            setOpen(true)
        }
    }
    return (
        <div className="header-container" id="header">
            <div className="header">
                <div className="header-left">
                    <Link to="/home">
                        <img src={process.env.PUBLIC_URL+"/images/gy_logo02.jpg"} className="header-logo"/>
                    </Link>
                </div>
                <div className="header-right">
                    <ul className="header-nav">
                        <li>
                            <NavLink to="/home" activeClassName="selected">PASSIONS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="selected">ABOUT</NavLink>
                        </li>
                        <li>
                            <a href={`${process.env.PUBLIC_URL}/Resume_Gangyeon_Lee.pdf`} target="_blank">RESUME</a>
                        </li>
                    </ul>
                    <div className="overlay-menu" onClick={()=>toggleOverlay()}>
                        <Hamburger color="#989AA4" toggled={isOpen} toggle={setOpen}/>
                    </div>
                </div>
            </div>
            <div className="overlay" id="overlay">
                <div className="overlay-contents" id="overlay-contents">
                    <ul className="overlay-nav">
                        <li onClick={()=>toggleOverlay()}>
                            <NavLink to="/home" activeClassName="selected">PASSIONS</NavLink>
                        </li>
                        <li onClick={()=>toggleOverlay()}>
                            <NavLink to="/about" activeClassName="selected">ABOUT</NavLink>
                        </li>
                        <li onClick={()=>toggleOverlay()}>
                            <a href={`${process.env.PUBLIC_URL}/Resume_Gangyeon_Lee.pdf`} target="_blank">RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}