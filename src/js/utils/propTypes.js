import { PropTypes } from 'react'

const todoShape = {
    id: PropTypes.number,
    description: PropTypes.string,
    completed: PropTypes.bool
};

const propTypes = {
    todoRequired: PropTypes.shape(todoShape).isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(todoShape))
};

export {
    propTypes
}
