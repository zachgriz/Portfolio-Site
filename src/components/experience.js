import React from "react";
import '../styles/experience.scss';

export default class Experience extends React.Component{
    render () {
        return <section>
            <div className="experience" id="experience">
                <div className="subhead">
                    <span>Work Experience</span>
                </div>
                <span className="blur"></span>
                <div className="grid">
                    <div className="item">
                        <p className="title">IDMA3 | Software Solutions Engineer <span>Contract</span></p>
                        <p className="duration">June 2023 - Present</p>
                        <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                    </div>
                    <div className="logo">
                        <img></img>
                    </div>
                    <div className="item">
                        <p className="title">Launch Consulting | Software Developer <span>Internship</span></p>
                        <p className="duration">June 2022 - August 2022</p>
                        <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                    </div>
                    <div className="logo">
                        <img></img>
                    </div>
                    <div className="item">
                        <p className="title">Washington State University | Data Structures TA <span>Part Time</span></p>
                        <p className="duration">January 2023 - May 2023</p>
                        <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                    </div>
                    <div className="logo">
                        <img></img>
                    </div>
                </div>
            </div>
        </section>
    }
}