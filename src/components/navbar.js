import React from "react";
import '../styles/navbar.scss'
import { Link } from "react-scroll";

export default class Navbar extends React.Component {
    render() {
        return <div className="navbar">
                    <div className="navitem">
                        <Link to="about" spy smooth duration={500}>about</Link>
                    </div>
                    <div className="navitem">
                        <Link to="experience" spy smooth duration={500} offset={-50}>experience</Link>
                    </div>
                    <div className="navitem">
                        <Link to="projects" spy smooth duration={500}>projects</Link>
                    </div>
                    <div className="navitem">
                        <Link to="hobbies" spy smooth duration={500}>interests</Link>
                    </div>
        </div>
    }
}