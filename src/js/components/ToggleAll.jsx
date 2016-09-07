import React from 'react'
import classNames from 'classnames'
import { propTypes } from 'utils'

const ToggleAll = props => 
    <input
        className={classNames(
            'toggle-all', 
            { hidden: isTodosListEmpty(props) }
        )}
        type="checkbox"
        checked={isAllTodoCompleted(props)}
        onClick={props.onClick}
    />

const isAllTodoCompleted = props =>
    props.todos.every(todo => todo.completed)

const isTodosListEmpty = props =>
    props.todos.length === 0

ToggleAll.propTypes = {
    todos: propTypes.todosRequired
};

export {
    ToggleAll
}
