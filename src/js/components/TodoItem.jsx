import React, { Component, PropTypes } from 'react'

const getLiCssClasses = props =>
    props.todo.completed ? 'completed' : ''

const TodoItem = props => {
    const { description, completed } = props;

    return (
        <li className={getLiCssClasses(props)}>
            <div className="view" onDoubleClick={() => console.log('double click')}>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={(e) => handleOnChange(e, props)}
                />
                <label>{props.todo.description}</label>
                <button
                    className="destroy"
                    onClick={() => handleOnClickRemoveIcon(props)}
                ></button>
            </div>
        </li>
    );
}

const handleOnChange = (e, props) => {
    const { todo, onToggleCheckbox } = props;
    const completed = e.target.checked;

    onToggleCheckbox(todo.id, completed);
}

const handleOnClickRemoveIcon = props => {
    const { todo, onClickRemoveIcon } = props;

    onClickRemoveIcon(todo.id);
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        completed: PropTypes.bool
    }),
    onToggleCheckbox: PropTypes.func.isRequired,
    onClickRemoveIcon: PropTypes.func.isRequired
};

export {
    TodoItem
}
