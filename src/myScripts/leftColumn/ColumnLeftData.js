import React from 'react';
import "../../myStyles/frameBackground.scss"
import { MdDashboard } from "react-icons/md";
import { FaMapMarkerAlt, FaLightbulb, FaRegLightbulb } from "react-icons/fa";

function ColumnLeftData() {
    return (
        <div className="columnLeftData__Button">
            <MdDashboard size={42} />
            <FaMapMarkerAlt size={42} />
            <FaLightbulb size={42} />
            <FaRegLightbulb size={42} />
        </div>
    )
}

export default ColumnLeftData
