import React, { PropTypes } from 'react'
import { filters } from 'utils'

const getCssClassesFor = (filter, props) =>
    props.filterSelected === filter ? 'selected' : ''

const Filters = props => 
    <ul className="filters">
        <li><a className={getCssClassesFor(filters.ALL, props)} href="#" onClick={() => props.onClickFilter(filters.ALL)}>All</a></li>
        <li><a className={getCssClassesFor(filters.ACTIVE, props)} href="#" onClick={() => props.onClickFilter(filters.ACTIVE)}>Active</a></li>
        <li><a className={getCssClassesFor(filters.COMPLETED, props)} href="#" onClick={() => props.onClickFilter(filters.COMPLETED)}>Completed</a></li>
    </ul>

Filters.propTypes = {
    filterSelected: PropTypes.string.isRequired,
    onClickFilter: PropTypes.func.isRequired
};

export {
    Filters
}
