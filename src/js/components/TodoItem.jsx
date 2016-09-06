import React, { Component, PropTypes } from 'react'

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
        const { todo } = this.props;
        const { editionModeEnabled } = this.state;

        return editionModeEnabled
            ? <input
                className="edit"
                defaultValue={todo.description}
                autoFocus
                onKeyUp={this.handleKeyUp.bind(this)} 
                onBlur={this.handleOnBlur.bind(this)}
              />
            : (
                <div onDoubleClick={() => this.setEditionMode(true)}>
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
            );
    }

    handleKeyUp(e) {
        if (e.keyCode === 27) {
            this.setEditionMode(false);
        }
    }

    handleOnBlur() {
        this.setEditionMode(false);
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
