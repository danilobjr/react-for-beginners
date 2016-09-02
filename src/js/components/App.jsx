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
            <TodoList todos={this.state.todos} />
        );
    }

    completeTodo(todoId, e) {
        let { todos } = this.state;
        const completed = e.target.checked;

        const todoToModify = todos.find(todo => todo.id === todoId);
        todoToModify.completed = completed;

        this.setState({ todos });
    }
}

export {
    App
}
