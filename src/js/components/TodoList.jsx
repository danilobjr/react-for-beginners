import React, { Component } from 'react'
import { TodoItem } from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.renderTodoItems()}
            </ul>
        );
    }

    renderTodoItems() {
        return this.props.todos.map(todo => 
            <TodoItem />
        );
    }
}

export {
    TodoList
}
