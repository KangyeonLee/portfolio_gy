import react from 'react'
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'

import '../../css/header.css'


export default function header(){
    return (
        <div className="header-container">
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
                            <NavLink to="/resume" activeClassName="selected">RESUME</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}