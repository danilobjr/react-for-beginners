import React from 'react'

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
            <ul>
                {this.todos.map(todo =>
                    <li>{todo.description}</li>
                )}
            </ul>
        );
    }
}

export {
    App
}
