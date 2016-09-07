import React from 'react'
import { propTypes } from 'utils'

const IncompleteTodosCount = props => 
    <span className="todo-count">
        <span>{getIncompleteTodosCount(props)}</span>
        &nbsp;
        <span>{renderItemWord(props)}</span>
        &nbsp;
        <span>left</span>
    </span>

const getIncompleteTodosCount = props =>
    props.todos.filter(todo => !todo.completed).length;

const renderItemWord = props =>
    getIncompleteTodosCount(props) > 1 ? 'items' : 'item'

IncompleteTodosCount.propTypes = {
    todos: propTypes.todosRequired
};

export {
    IncompleteTodosCount
}
