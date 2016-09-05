import React, { Component, PropTypes } from 'react'

class TodoItem extends Component {
    render() {
        const { todo } = this.props;

        return (
            <li className={this.getLiCssClasses.bind(this)}>
                <div className="view" onDoubleClick={() => console.log('double click')}>
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={this.handleOnChange.bind(this)}
                    />
                    <label>{todo.description}</label>
                    <button
                        className="destroy"
                        onClick={this.handleOnClickRemoveIcon.bind(this)}
                    ></button>
                </div>
            </li>
        );
    }

    getLiCssClasses() {
        return this.props.todo.completed ? 'completed' : '';
    }

    handleOnChange(e) {
        const { todo, onToggleCheckbox } = this.props;
        const completed = e.target.checked;

        onToggleCheckbox(todo.id, completed);
    }

    handleOnClickRemoveIcon() {
        const { todo, onClickRemoveIcon } = this.props;

        onClickRemoveIcon(todo.id);
    }
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
