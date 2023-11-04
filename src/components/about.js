import React from "react";

import '../styles/about.scss';
import me from '../assets/me.png';
import Tag from "./tag";

export default class About extends React.Component {
    render() {
        return <div className="about" id="about">
            <div className="content">
                <span className="blur"></span>
                <span className="blur"></span>
                <h1>I'm <span>Zach</span>, Software Engineer</h1>
                <p>Ad magna proident consectetur commodo id id labore id esse culpa. Deserunt duis commodo mollit adipisicing elit laboris incididunt tempor elit eu enim. Lorem officia adipisicing sint anim do incididunt adipisicing do Lorem nostrud magna commodo dolore voluptate. Nulla mollit irure sint laboris deserunt amet officia excepteur culpa aute duis veniam. Veniam enim in cillum consectetur ad minim aute tempor aute culpa deserunt laboris. Velit dolor do amet officia qui occaecat aliqua incididunt velit aute elit. Culpa eu esse aute quis.</p>
                <Tag content = "C#"/>
                <Tag content = "C/C++"/>
                <Tag content = "Java"/>
                <Tag content = "Python"/>
                <Tag content = "ReactJS"/>
                <Tag content = "Data Structures"/>
                <Tag content = "CSS"/>
                <Tag content = "HTML"/>

            </div>
            <div className="image">
                <img src={me} alt="img"/>
            </div>
            
        </div>
    }
}