import React, { Component, PropTypes } from 'react'
import { TodoItem } from './TodoItem'
import { propTypes } from './../utils/propTypes'

const TodoList = props =>
    <ul className="todo-list">
        {renderTodoItems(props)}
    </ul>

const renderTodoItems = (props) =>
    props.todos.map(todo => 
        <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCheckbox={props.onToggleCheckbox} 
            onClickRemoveIcon={props.onClickRemoveIcon}
        />
    )

TodoList.propTypes = {
    todos: propTypes.todos,
    onToggleCheckbox: PropTypes.func.isRequired,
    onClickRemoveIcon: PropTypes.func.isRequired
};

export {
    TodoList
}
