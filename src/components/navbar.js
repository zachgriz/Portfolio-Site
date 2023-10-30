import React from "react";
import '../styles/navbar.scss'
import { Link } from "react-scroll";

export default class Navbar extends React.Component {
    render() {
        return <nav className="navbar">
            <ul className="navlist">
                <li className="navitem">
                    <Link to="/" smooth={true} duration={500}>about</Link>
                </li>
                <li className="navitem">
                    <Link to="experience" smooth={true} duration={500}>experience</Link>
                </li>
                <li className="navitem">
                    <Link to="projects" smooth={true} duration={500}>projects</Link>
                </li>
                <li className="navitem">
                    <Link to="hobbies" smooth={true} duration={500}>interests</Link>
                </li>

            </ul>
        </nav>
    }
}