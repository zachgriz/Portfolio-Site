import React from "react";
import '../styles/navbar.scss'
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return <nav className="navbar">
            <ul className="navlist">
                <li className="navitem">
                    <Link to="/">about</Link>
                </li>
                <li className="navitem">
                    <Link to="/experience">experience</Link>
                </li>
                <li className="navitem">
                    <Link to="/projects">projects</Link>
                </li>
                <li className="navitem">
                    <Link to="/hobbies">interests</Link>
                </li>

            </ul>
        </nav>
    }
}