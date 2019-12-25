import React from 'react';


export default class TextField extends React.Component {
    render() {
        return (
            <div className="todo__text-field">
                <input
                    type="text"
                    placeholder="Введите описание"
                    onChange={this.props.HandlerChange}
                    value={this.props.value}
                />
                <input
                    type="button"
                    value="Добавить"
                    onClick={this.props.click}
                    disabled={this.props.btnActive}
                />
            </div>
        )
    }
}