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
                    onChange={(e) => console.log('todo changed')}
                />
                <label>{todo.description}</label>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        completed: PropTypes.bool
    })
};

export {
    TodoItem
}
