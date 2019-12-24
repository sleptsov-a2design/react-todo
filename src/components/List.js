import React from 'react'
import StatusBar from './StatusBar'
import TextField from './TextField'
import ListItem from './ListItem'
import '../styles/Todo.scss'

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            item : [],
            newTitle : '',
            newIdForItem : 0,
        }
    }
    handleChangeInput = (e) => {
        this.setState({
            newTitle : e.target.value
        })
    }
    handleAddNewTodoItem = (e) => {
        this.setState (
            prevState => ({
                newIdForItem: prevState.newIdForItem + 1
        }),
        () => 
            this.setState(
                prevState => ({
                    item : [
                        ...prevState.item,
                        {
                            id : prevState.newIdForItem,
                            title : prevState.newTitle,
                            change : false
                        }
                    ]
                }),
                () =>
                this.setState({
                    newTitle: ""
                    })
                )
            )
    }
    render() {
        const list = this.state.item.map(item => {
                return (
                    <ListItem
                        key = {item.id}
                        title = {item.title}
                    />
                )
        });
        return (
            <div className="todo">
                <h1>Список дел</h1>
                <StatusBar/>
                <ul className="todo__list">
                    {list}
                </ul>
                <TextField
                    value={this.state.newTitle}
                    click={this.handleAddNewTodoItem}
                    HandlerChange={this.handleChangeInput}
                />
            </div>
            
        )
    }
}