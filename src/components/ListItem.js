import React from 'react';


export default class ListItem extends React.Component {
    render() {
        return (
            <li>
                <label>
                    <input
                        className="todo__item-checkbox"
                        type="checkbox"
                    />
                <span>{this.props.title}</span>
                </label>
                <input
                    className="todo__item-button"
                    type="button"
                    value="x"
                />
            </li>
        )
    }
}