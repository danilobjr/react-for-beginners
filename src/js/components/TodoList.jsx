import React, { Component, PropTypes } from 'react'
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
            <TodoItem key={todo.id} todo={todo} />
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        completed: PropTypes.string
    }))
};

export {
    TodoList
}
