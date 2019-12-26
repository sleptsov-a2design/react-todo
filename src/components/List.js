import React from 'react'
import StatusBar from './StatusBar'
import TextField from './TextField'
import ListItem from './ListItem'
import { Link } from 'react-router-dom'
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
                newIdForItem: prevState.newIdForItem + 1,
                item : [
                    ...prevState.item,
                    {
                        id : prevState.newIdForItem,
                        title : prevState.newTitle,
                        change : false
                    }
                ],
                newTitle: ""
            })
        )
    
    }
    handleToggleItem = (id) => {
        this.setState(prevState => ({
            item: prevState.item.map(
                el => (el.id === id ? { ...el, change: !el.change } : el)
            )
        }));
        }
    handleRemoveTodoItem = (id) => {
        this.setState(prevState => ({
            item: prevState.item.filter(el => el.id !== id)
        }));
        } 
    render() {
        const list = this.state.item.map(item => {
                return (
                    <ListItem
                        key={item.id}
                        context={item}
                        toggle={this.handleToggleItem}
                        remove={this.handleRemoveTodoItem}
                    />
                )
        });
        let widthStatus = (this.state.item.filter(el => el.change).length)/this.state.item.length * 100
        return (
            <div className="todo">
                <Link className="todo__link" to="/">Go to Home Page</Link>
                <h1>Список дел</h1>
                {this.state.item.length ?
                    <StatusBar
                        progress={`${this.state.item.filter(el => el.change).length}/${this.state.item.length}`}
                        width={{width : `${widthStatus}%`}}
                    /> : null
                }
                <ul className="todo__list">
                    {list}
                </ul>
                <TextField
                    value={this.state.newTitle}
                    click={this.handleAddNewTodoItem}
                    HandlerChange={this.handleChangeInput}
                    btnActive={!this.state.newTitle}
                />
            </div>
            
        )
    }
}