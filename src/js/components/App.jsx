import React from 'react'
import uuid from 'node-uuid'
import { 
    AppHeader, ToggleAll, NewTodoInput, 
    TodoList, Footer
} from 'components'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    id: uuid.v1(),
                    description: 'talk to John',
                    completed: false
                },
                { 
                    id: uuid.v1(),
                    description: 'buy some fruits',
                    completed: true
                }
            ]
        };
    }

    render() {
        return (
            <div className="todoapp">
                <AppHeader />
                <ToggleAll
                    todos={this.state.todos}
                    onClick={this.toggleAllTodosCompletion.bind(this)}
                />
                <NewTodoInput onEnterDescription={this.createTodo.bind(this)} />
                <TodoList
                    todos={this.state.todos}
                    onToggleCheckbox={this.completeTodo.bind(this)} 
                    onDescriptionChange={this.updateTodoDescription.bind(this)}
                    onClickRemoveIcon={this.removeTodo.bind(this)}
                />
                <Footer />
            </div>
        );
    }

    toggleAllTodosCompletion() {
        const { todos } = this.state;
        const allTodosAreCompleted = todos.every(todo => todo.completed);

        if (allTodosAreCompleted) {
            todos.forEach(todo => todo.completed = false);
        } else {
            todos.forEach(todo => todo.completed = true);
        }

        this.setState({ todos: this.state.todos });
    }

    createTodo(description) {
        this.state.todos.push({
            id: uuid.v1(),
            description,
            completed: false
        });

        this.setState({ todos: this.state.todos });
    }

    completeTodo(id, completed) {
        let { todos } = this.state;

        const todoToModify = todos.find(todo => todo.id === id);
        todoToModify.completed = completed;

        this.setState({ todos });
    }

    updateTodoDescription(id, newDescription) {
        let { todos } = this.state;

        const todoToModify = todos.find(todo => todo.id === id);
        todoToModify.description = newDescription;

        this.setState({ todos });
    }

    isAllTodoCompleted() {
        return this.state.todos.every(todo => todo.completed);
    }

    removeTodo(id) {
        let { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);

        this.setState({ todos });
    }
}

export {
    App
}
