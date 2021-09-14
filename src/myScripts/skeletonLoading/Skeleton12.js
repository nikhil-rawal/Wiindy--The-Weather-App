import React from 'react'
import SkeletonElement from './SkeletonElement'
import "../../myStyles/frameBackground.scss";

function Skeleton12() {
    return (
        <div className="skeleton__twelve">
            <SkeletonElement type="text12" />
            <SkeletonElement type="avatar12" />
            <SkeletonElement type="text12" />
        </div>
    )
}

export default Skeleton12
