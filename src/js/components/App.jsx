import React from 'react'
import classNames from 'classnames'

class App extends React.Component {
    constructor() {
        super();

        this.todos = [
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
    }

    render() {
        return (
            <ul className="todo-list">
                {this.renderTodos()}
            </ul>
        );
    }

    renderTodos() {
        return this.todos.map(todo =>
            <li key={todo.id} className={classNames({ completed: todo.completed })}>
                <input className="toggle" type="checkbox" checked={todo.completed} onClick={(e) => this.completeTodo(todo.id, e)}/>
                <label>{todo.description}</label>
            </li>
        );
    }

    completeTodo(todoId, e) {
        console.log(todoId, e.target.checked);
    }
}

export {
    App
}
