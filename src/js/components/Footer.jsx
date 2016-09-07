import React, { PropTypes } from 'react'
import { propTypes } from 'utils'

const Footer = props => 
    <footer className="footer">
        <span className="todo-count">
            <span>1</span>
            &nbsp;
            <span>item</span>
            &nbsp;
            <span>left</span>
        </span>
    </footer>   

Footer.propTypes = {
    todos: propTypes.todosRequired
};

export {
    Footer
}
