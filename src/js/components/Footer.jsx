import React, { PropTypes } from 'react'
import { IncompleteTodosCount, ClearCompletedButton } from 'components'
import { propTypes } from 'utils'

const Footer = props => 
    <footer className="footer">
        <IncompleteTodosCount todos={props.todos} />
        <ClearCompletedButton hidden={isClearCompletedButtonHidden(props)} />
    </footer>   

const isClearCompletedButtonHidden = props =>
    props.todos.every(todo => !todo.completed)

Footer.propTypes = {
    todos: propTypes.todosRequired
};

export {
    Footer
}
