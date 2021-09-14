import React from 'react'
import SkeletonElement from './SkeletonElement'
import "../../myStyles/frameBackground.scss";

function SkeletonActiveParam() {
    return (
        <div className="skeleton__activeparams">
            <div>
                <SkeletonElement type="avatar" />
            </div>
            <div className="skeleton__actpar_texts">
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
        </div>
    )
}

export default SkeletonActiveParam
