import React from "react";
import '../styles/experience.scss';

export default class Projects extends React.Component{
    render () {
        return <div className="projects" id="projects">
            <div className="subhead">
                <span>Projects</span>
            </div>
            <span className="blur"></span>
            <div className="grid">
                <div className="item">
                    <p className="title">Rate My Study Space</p>
                    <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                </div>
                <div className="logo">
                    <img></img>
                </div>
                <div className="item">
                    <p className="title">2D Trading Card Game</p>
                    <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                </div>
                <div className="logo">
                </div>
                <div className="item">
                    <p className="title">Undergraduate Research Application</p>
                    <p className="body">Lorem consequat irure aliqua culpa aliquip proident. Magna mollit cupidatat reprehenderit id consectetur excepteur minim non aute cupidatat. Culpa excepteur cupidatat in deserunt aliquip laboris nulla irure nulla Lorem. Adipisicing cillum Lorem laborum sint est cillum est laboris magna. Veniam aute cillum dolor deserunt id amet aliqua sint officia.</p>
                </div>
                <div className="logo">
                    <img></img>
                </div>
            </div>
        </div>
    }
}