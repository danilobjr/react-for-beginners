import React, { Component, PropTypes } from 'react'
import { TodoItemEdit, TodoItemView } from 'components'
import { propTypes } from 'utils'

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
            ? <TodoItemEdit 
                todo={todo}
                onConfirmEdition={this.handleDescriptionChange.bind(this)}
                onCancelEdition={() => this.setEditionMode(false)}
              />
            : <TodoItemView
                todo={todo}
                onDoubleClick={() => this.setEditionMode(true)}
                onToggleCheckbox={onToggleCheckbox} 
                onClickRemoveIcon={onClickRemoveIcon}
              />;
    }

    handleDescriptionChange(id, newDescription) {
        this.props.onDescriptionChange(id, newDescription);
        this.setEditionMode(false);
    }

    setEditionMode(isEnabled) {
        this.setState({ editionModeEnabled: isEnabled });
    }
}

TodoItem.propTypes = {
    todo: propTypes.todoRequired,
    onToggleCheckbox: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    onClickRemoveIcon: PropTypes.func.isRequired
};

export {
    TodoItem
}
