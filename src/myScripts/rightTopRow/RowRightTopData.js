import React from 'react'
import "../../myStyles/frameBackground.scss"
import { ImPacman } from "react-icons/im"

function RowRightTopData() {
    return (
        <div className="rowRightTop__Data">
            <ImPacman size={30} className="pacmanCreator" />
            <h1 className="userCreator">Nikhil Rawal</h1>
        </div>
    )
}

export default RowRightTopData
