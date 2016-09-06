import React from 'react'
import { TodoList } from 'components'

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
                onDescriptionChange={this.updateTodoDescription.bind(this)}
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

    updateTodoDescription(id, newDescription) {
        console.log(id, newDescription);
    }

    onClickRemoveIcon(id) {
        let { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);

        this.setState({ todos });
    }
}

export {
    App
}
