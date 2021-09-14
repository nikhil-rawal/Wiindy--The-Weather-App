import React from 'react'
import "../../myStyles/frameBackground.scss";

function SkeletonElement(props) {
    let classes = `skeleton ${props.type}`
    return (
        <div className={classes}>
        </div>
    )
}

export default SkeletonElement
