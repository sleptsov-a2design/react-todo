import React from 'react';


export default class TextField extends React.Component {
    render() {
        const { value, HandlerChange, click, btnActive } = this.props
        return (
            <div className="todo__text-field">
                <input
                    type="text"
                    placeholder="Введите описание"
                    onChange={HandlerChange}
                    value={value}
                />
                <input
                    type="button"
                    value="Добавить"
                    onClick={click}
                    disabled={btnActive}
                />
            </div>
        )
    }
}