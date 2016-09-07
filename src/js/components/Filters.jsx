import React, { PropTypes } from 'react'
import { filters } from 'utils'

const Filters = props => 
    <ul className="filters">
        <li><a href="#" onClick={() => props.onClickFilter(filters.ALL)}>All</a></li>
        <li><a href="#" onClick={() => props.onClickFilter(filters.ACTIVE)}>Active</a></li>
        <li><a href="#" onClick={() => props.onClickFilter(filters.COMPLETED)}>Completed</a></li>
    </ul>

Filters.propTypes = {
    onClickFilter: PropTypes.func.isRequired
};

export {
    Filters
}
