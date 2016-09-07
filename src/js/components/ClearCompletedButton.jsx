import React, { PropTypes } from 'react'
import classNames from 'classnames'

const getCssClasses = props =>
    classNames('clear-completed', { hidden: props.hidden })

const ClearCompletedButton = props => 
    <button
        className={getCssClasses(props)}
        onClick={props.onClick}
    >
        Clear Completed
    </button>

ClearCompletedButton.propTypes = {
    hidden: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

ClearCompletedButton.defaultProps = {
    hidden: false
};

export {
    ClearCompletedButton
}
