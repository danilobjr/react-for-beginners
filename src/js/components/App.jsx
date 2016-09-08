import React from 'react'
import uuid from 'node-uuid'
import { 
    AppHeader, ToggleAll, NewTodoInput, 
    TodoList, Footer
} from 'components'
import { filters } from 'utils'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: filters.ALL,
            todos: []
        };
    }

    render() {
        return (
            <div className="todoapp">
                <AppHeader />
                <ToggleAll
                    todos={this.state.todos}
                    onChange={this.toggleAllTodosCompletion.bind(this)}
                />
                <NewTodoInput onEnterDescription={this.createTodo.bind(this)} />
                <TodoList
                    todos={this.getFilteredTodos()}
                    onToggleCheckbox={this.completeTodo.bind(this)} 
                    onDescriptionChange={this.updateTodoDescription.bind(this)}
                    onClickRemoveIcon={this.removeTodo.bind(this)}
                />
                <Footer
                    todos={this.state.todos}
                    filterSelected={this.state.filter}
                    onClickFilter={this.setFilter.bind(this)}
                    onClickClearCompletedButton={this.removeCompletedTodos.bind(this)} 
                />
            </div>
        );
    }

    getFilteredTodos() {
        const { todos, filter } = this.state;

        if (filter === filters.ACTIVE) {
            return todos.filter(todo => !todo.completed);
        }

        if (filter === filters.COMPLETED) {
            return todos.filter(todo => todo.completed);
        }

        return todos;
    }

    toggleAllTodosCompletion() {
        const { todos } = this.state;
        const allTodosAreCompleted = todos.every(todo => todo.completed);

        if (allTodosAreCompleted) {
            todos.forEach(todo => todo.completed = false);
        } else {
            todos.forEach(todo => todo.completed = true);
        }

        this.setState({ todos });
    }

    createTodo(description) {
        const { todos } = this.state;

        if (!description) {
            return;
        }

        todos.push({
            id: uuid.v1(),
            description,
            completed: false
        });

        this.setState({ todos });
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

    setFilter(filter) {
        this.setState({ filter });
    }

    removeCompletedTodos() {
        const incompleteTodos = this.state.todos.filter(todo => !todo.completed);

        this.setState({ todos: incompleteTodos });
    }
}

export {
    App
}
