import React, { Component, PropTypes } from 'react'

const getLiCssClasses = props =>
    props.todo.completed ? 'completed' : ''

const TodoItem = props => {
    const { description, completed } = props;

    return (
        <li className={getLiCssClasses(props)}>
            <input
                className="toggle"
                type="checkbox"
                checked={props.todo.completed}
                onChange={(e) => handleOnChange(e, props)}
            />
            <label>{props.todo.description}</label>
        </li>
    );
}

const handleOnChange = (e, props) => {
    const { todo, onCompleteTodo } = props;
    const completed = e.target.checked;

    onCompleteTodo(todo.id, completed);
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        completed: PropTypes.bool
    }),
    onCompleteTodo: PropTypes.func.isRequired
};

export {
    TodoItem
}
