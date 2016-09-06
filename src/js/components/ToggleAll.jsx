import React from 'react'
import { propTypes } from 'utils'

const ToggleAll = props => 
    <input
        className="toggle-all"
        type="checkbox"
        checked={isAllTodoCompleted(props)}
        onClick={props.onClick}
    />

const isAllTodoCompleted = props =>
    props.todos.every(todo => todo.completed)

ToggleAll.propTypes = {
    todos: propTypes.todos
};

export {
    ToggleAll
}
