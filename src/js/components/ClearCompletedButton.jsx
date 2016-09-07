import React, { PropTypes } from 'react'
import classNames from 'classnames'

const getCssClasses = props =>
    classNames('clear-completed', { hidden: props.hidden })

const ClearCompletedButton = props => 
    <button className={getCssClasses(props)}>Clear Completed</button>

ClearCompletedButton.propTypes = {
    hidden: PropTypes.bool
};

ClearCompletedButton.defaultProps = {
    hidden: false
};

export {
    ClearCompletedButton
}
