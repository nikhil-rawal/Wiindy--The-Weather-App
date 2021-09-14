import React from 'react'
import "../../myStyles/frameBackground.scss";

function SkeletonElement(props) {
    const classes = `skeleton ${props.type}`
    return (
        <div className={classes}>
        </div>
    )
}

export default SkeletonElement
