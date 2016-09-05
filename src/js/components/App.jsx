import React from 'react'
import { TodoList } from './TodoList'
import classNames from 'classnames'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    id: 1,
                    description: 'talk to John',
                    completed: false
                },
                { 
                    id: 2,
                    description: 'buy some fruits',
                    completed: true
                }
            ]
        };
    }

    render() {
        return (
            <TodoList
                todos={this.state.todos}
                onToggleCheckbox={this.completeTodo.bind(this)} 
                onClickRemoveIcon={this.onClickRemoveIcon.bind(this)}
            />
        );
    }

    completeTodo(id, completed) {
        let { todos } = this.state;

        const todoToModify = todos.find(todo => todo.id === id);
        todoToModify.completed = completed;

        this.setState({ todos });
    }

    onClickRemoveIcon() {
        console.log(`remove todo`);
    }
}

export {
    App
}
