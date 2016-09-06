import React, { PropTypes } from 'react'
import { keyCodes } from 'utils'

const NewTodoInput = props => 
    <input className="new-todo" placeholder="What needs to be done?" onKeyUp={(e) => handleKeyUp(e, props)} />

const handleKeyUp = (e, props) => {
    const newDescription = e.target.value;

    if (e.keyCode === keyCodes.ENTER) {
        props.onEnterDescription(newDescription);
        e.target.value = '';
    }
}

NewTodoInput.propTypes = {
    onEnterDescription: PropTypes.func.isRequired
};

export {
    NewTodoInput
}
