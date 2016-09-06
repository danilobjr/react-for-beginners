import { PropTypes } from 'react'

const todoShape = {
    id: PropTypes.string,
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
