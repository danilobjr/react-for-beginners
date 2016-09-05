import React, { Component, PropTypes } from 'react'

class TodoItem extends Component {
    render() {
        const { todo } = this.props;

        const liCssClasses = todo.completed ? 'completed' : '';

        return (
            <li className={liCssClasses}>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={this.handleOnChange.bind(this)}
                />
                <label>{todo.description}</label>
            </li>
        );
    }

    handleOnChange(e) {
        const { todo, onCompleteTodo } = this.props;
        const completed = e.target.checked;

        onCompleteTodo(todo.id, completed);
    }
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
