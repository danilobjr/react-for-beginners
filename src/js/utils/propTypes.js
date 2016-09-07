import { PropTypes } from 'react'

const todoShape = {
    id: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool
};

const propTypes = {
    todoRequired: PropTypes.shape(todoShape).isRequired,
    todosRequired: PropTypes.arrayOf(PropTypes.shape(todoShape)).isRequired
};

export {
    propTypes
}
