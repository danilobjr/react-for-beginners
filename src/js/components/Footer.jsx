import React, { PropTypes } from 'react'
import { propTypes } from 'utils'

const Footer = props => 
    <footer className="footer">
        <span className="todo-count">
            <span>{getIncompleteTodosCount(props)}</span>
            &nbsp;
            <span>{renderItemWord(props)}</span>
            &nbsp;
            <span>left</span>
        </span>
    </footer>   

const getIncompleteTodosCount = props =>
    props.todos.filter(todo => !todo.completed).length;

const renderItemWord = props =>
    getIncompleteTodosCount(props) > 1 ? 'items' : 'item'

Footer.propTypes = {
    todos: propTypes.todosRequired
};

export {
    Footer
}
