import React from "react";
import '../styles/tag.scss';

export default class Tag extends React.Component {
    render() {
        return <div className="tag">
            {this.props.content}
        </div>
    }
}