import React, { PropTypes } from 'react'

const Filters = props => 
    <ul className="filters">
        <li><a href="#" onClick={() => props.onClickFilter('All')}>All</a></li>
        <li><a href="#" onClick={() => props.onClickFilter('Active')}>Active</a></li>
        <li><a href="#" onClick={() => props.onClickFilter('Completed')}>Completed</a></li>
    </ul>

Filters.propTypes = {
    onClickFilter: PropTypes.func.isRequired
};

export {
    Filters
}
