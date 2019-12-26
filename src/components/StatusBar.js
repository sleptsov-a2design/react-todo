import React from 'react'
import '../styles/StatusBar.scss'

export default class StatusBar extends React.Component {
    render() {
        const {progress, width} = this.props;
        return (
            <div className="todo__status">
            <p className="todo__status-stat">Завершено: {progress}</p>
                <div className="todo__status-progress">
                    <div className="todo__status-progress-line" style={width}></div>
                </div>
            </div>
        )
    }
}