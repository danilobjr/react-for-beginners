import React, { PropTypes } from 'react'
import { keyCodes } from './../utils/keyCodes'
import { propTypes } from './../utils/propTypes'

const TodoItemEdit = props => 
    <input
        className="edit"
        defaultValue={props.todo.description}
        autoFocus
        onKeyUp={(e) => handleKeyUp(e, props)} 
        onBlur={props.onCancelEdition}
    />

const handleKeyUp = (e, props) => {
    const { todo, onConfirmEdition, onCancelEdition } = props;

    if (e.keyCode === keyCodes.ESC) {
        onCancelEdition();
    }

    if (e.keyCode === keyCodes.ENTER) {
        const newDescription = e.target.value;
        onConfirmEdition(todo.id, newDescription);
    }
}

TodoItemEdit.propTypes = {
    todo: propTypes.todoRequired,
    onConfirmEdition: PropTypes.func.isRequired,
    onCancelEdition: PropTypes.func.isRequired
};

export {
    TodoItemEdit
}
