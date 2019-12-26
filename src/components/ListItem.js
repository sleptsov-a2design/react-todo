import React from 'react';


export default class ListItem extends React.Component {
    handleToggleActive = () => {
        this.props.toggle(this.props.context.id);
    }
    handleRemove = () => {
        this.props.remove(this.props.context.id);
    }
    render() {
        const {context} = this.props;
        return (
            <li>
                <label>
                    <input
                        className="todo__item-checkbox"
                        type="checkbox"
                        onChange={this.handleToggleActive}
                    />
                <span>
                    {!context.change ?
                    (context.title) : 
                    (<s>{context.title}</s>)}
                </span>
                </label>
                <input
                    className="todo__item-button"
                    type="button"
                    value="x"
                    onClick={this.handleRemove}
                />
            </li>
        )
    }
}