import React, { PropTypes } from 'react'
import { propTypes } from 'utils'

const TodoItemView = (props) => 
    <div>
        <input
            className="toggle"
            type="checkbox"
            checked={props.todo.completed}
            onChange={(e) => handleOnChange(e, props)}
        />
        <label onDoubleClick={props.onDoubleClick}>{props.todo.description}</label>
        <button
            className="destroy"
            onClick={() => handleOnClickRemoveIcon(props)}
        ></button>
    </div>

const handleOnChange = (e, props) => {
    const { todo, onToggleCheckbox } = props;
    const completed = e.target.checked;

    onToggleCheckbox(todo.id, completed);
}

const handleOnClickRemoveIcon = props => {
    const { todo, onClickRemoveIcon } = props;

    onClickRemoveIcon(todo.id);
}

TodoItemView.propTypes = {
    todo: propTypes.todoRequired,
    onDoubleClick: PropTypes.func.isRequired,
    onToggleCheckbox: PropTypes.func.isRequired,
    onClickRemoveIcon: PropTypes.func.isRequired
};

export {
    TodoItemView
}
