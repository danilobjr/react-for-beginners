import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { IncompleteTodosCount, ClearCompletedButton } from 'components'
import { propTypes } from 'utils'

const getCssClasses = props =>
    classNames(
        'footer', 
        { hidden: props.todos.length === 0 }
    )

const Footer = props => 
    <footer className={getCssClasses(props)}>
        <IncompleteTodosCount todos={props.todos} />
        <ul className="filters">
            <li><a href="#">All</a></li>
            <li><a href="#">Active</a></li>
            <li><a href="#">Completed</a></li>
        </ul>
        <ClearCompletedButton
            hidden={isClearCompletedButtonHidden(props)}
            onClick={props.onClickClearCompletedButton} 
        />
    </footer>   

const isClearCompletedButtonHidden = props =>
    props.todos.every(todo => !todo.completed)

Footer.propTypes = {
    todos: propTypes.todosRequired,
    onClickClearCompletedButton: PropTypes.func.isRequired
};

export {
    Footer
}
