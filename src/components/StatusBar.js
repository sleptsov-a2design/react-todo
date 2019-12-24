import React from 'react'
import '../styles/StatusBar.scss'

export default class StatusBar extends React.Component {
    render() {
        return (
            <div className="todo__status">
                <p className="todo__status-stat">Завершено: 0/2</p>
                <div className="todo__status-progress">
                    <div className="todo__status-progress-line"></div>
                </div>
            </div>
        )
    }
}