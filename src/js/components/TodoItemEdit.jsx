import React, { PropTypes } from 'react'

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

    if (e.keyCode === 27) {
        onCancelEdition();
    }

    if (e.keyCode === 13) {
        const newDescription = e.target.value;
        onConfirmEdition(todo.id, newDescription);
    }
}

TodoItemEdit.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    onConfirmEdition: PropTypes.func.isRequired,
    onCancelEdition: PropTypes.func.isRequired
};

export {
    TodoItemEdit
}
