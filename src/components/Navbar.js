import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../index.scss"

function NavBar() {

    return (
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="active">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="active">
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li className="active">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className="active">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
