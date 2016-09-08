import React, { Component } from 'react'
import uuid from 'node-uuid'
import { App } from 'components'

class AppContainer extends Component {
    constructor(props) {
        super(props);
    
        this.todos = [];
    }

    componentDidMount() {
        setTimeout(() => {
            this.todos = [
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
        }, 1000);
    }

    render() {
        return (
            <App todos={this.todos} />
        );
    }
}

export {
    AppContainer
}
