import React from 'react'
import "../../myStyles/frameBackground.scss"
import { FcBusinessman } from "react-icons/fc"

function RowRightTopData() {
    return (
        <div className="rowRightTop__Data">
            <FcBusinessman size={32} className="pacmanCreator" />
            <h1 className="userCreator">Nikhil Rawal</h1>
        </div>
    )
}

export default RowRightTopData
