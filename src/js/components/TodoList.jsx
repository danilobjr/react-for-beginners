import React, { Component } from 'react'
import { TodoItem } from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        );
    }
}

export {
    TodoList
}
