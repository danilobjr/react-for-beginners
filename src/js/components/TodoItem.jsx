import React, { Component, PropTypes } from 'react'
import { TodoItemView } from './TodoItemView'

class TodoItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            editionModeEnabled: false
        };
    }

    render() {
        const { todo } = this.props;

        return (
            <li className={this.getLiCssClasses()}>{this.renderContent()}</li>
        );
    }

    getLiCssClasses() {
        return this.props.todo.completed ? 'completed' : '';
    }

    renderContent() {
        const { todo, onToggleCheckbox, onClickRemoveIcon } = this.props;
        const { editionModeEnabled } = this.state;

        return editionModeEnabled
            ? <input
                className="edit"
                defaultValue={todo.description}
                autoFocus
                onKeyUp={this.handleKeyUp.bind(this)} 
                onBlur={this.handleOnBlur.bind(this)}
              />
            : <TodoItemView
                todo={todo}
                onDoubleClick={() => this.setEditionMode(true)}
                onToggleCheckbox={onToggleCheckbox} 
                onClickRemoveIcon={onClickRemoveIcon}
              />;
    }

    handleKeyUp(e) {
        if (e.keyCode === 27) {
            this.setEditionMode(false);
        }

        if (e.keyCode === 13) {
            console.log('trigger description update:', this.props.todo.description);
            this.setEditionMode(false);
        }
    }

    handleOnBlur() {
        this.setEditionMode(false);
    }

    setEditionMode(isEnabled) {
        this.setState({ editionModeEnabled: isEnabled });
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
