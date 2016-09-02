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
                <li>{this.todos[0].description}</li>
                {/* I use { ...  } to put some raw JS inner JSX */}
                <li>{`I need to ${this.todos[1].description}`}</li>
            </ul>
        );
    }
}

export {
    App
}
