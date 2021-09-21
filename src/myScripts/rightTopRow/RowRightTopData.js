import React from 'react'
import "../../myStyles/frameBackground.scss"
import { FcBusinessman } from "react-icons/fc"

function RowRightTopData() {
    return (
        <div className="rowRightTop__Data">
            <FcBusinessman size={32} className="pacmanCreator" />
            <span className="userCreator">Nikhil Rawal</span>
        </div>
    )
}

export default RowRightTopData
