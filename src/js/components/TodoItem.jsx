import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <li>
                <input className="toggle" type="checkbox" />
                <label>Do something</label>
            </li>
        );
    }
}

export {
    TodoItem
}
