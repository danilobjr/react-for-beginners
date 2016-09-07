import React, { PropTypes } from 'react'
import { IncompleteTodosCount } from 'components'
import { propTypes } from 'utils'

const Footer = props => 
    <footer className="footer">
        <IncompleteTodosCount todos={props.todos} />
    </footer>   

Footer.propTypes = {
    todos: propTypes.todosRequired
};

export {
    Footer
}
