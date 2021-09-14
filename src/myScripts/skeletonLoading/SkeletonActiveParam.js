import React from 'react'
import SkeletonElement from './SkeletonElement'

function SkeletonActiveParam() {
    return (
        <div className="skeleton__activeparams">
            <SkeletonElement type="avatar"></SkeletonElement>
            <div className="skeleton__actpar_texts">
                <SkeletonElement type="text"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
            </div>
        </div>
    )
}

export default SkeletonActiveParam
