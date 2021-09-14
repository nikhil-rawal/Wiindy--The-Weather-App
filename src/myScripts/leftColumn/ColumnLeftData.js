import React, { useState, useContext, useEffect } from 'react';
import { WeatherStackContext } from "../ExternalFrame"
import "../../myStyles/frameBackground.scss"
import { MdDashboard } from "react-icons/md";
import { FaMapMarkerAlt, FaLightbulb, FaRegLightbulb } from "react-icons/fa";

function ColumnLeftData() {

    const WeatherStack = useContext(WeatherStackContext);
    const [stateweatherStackData, setweatherStackData] = useState(null);

    useEffect(() => {
        setweatherStackData(WeatherStack);
    }, [WeatherStack])

    function handleMouseEnter(e) {
        e.target.style.color = "hsl(269, 99%, 61%)";
    }
    function handleMouseLeave(e) {
        e.target.style.color = "hsla(251, 7%, 71%, 1);"
    }

    let url = "";
    let lat = "";
    let lon = "";
    let targ = "_self";

    if (stateweatherStackData !== null && stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
        lat = stateweatherStackData[0].location.lat;
        lon = stateweatherStackData[0].location.lon;
        url = `https://www.google.com/maps/@${lat},${lon},11z`;
        targ = "_blank";
    }


    return (
        <div className="columnLeftData__Button">
            <MdDashboard size={42} style={{ color: "hsl(269, 99%, 61%)" }} />
            <a href={url} target={targ} style={{ margin: 0 }}><FaMapMarkerAlt size={42} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} /></a>
            <FaLightbulb size={42} />
            <FaRegLightbulb size={42} />
        </div>
    )
}

export default ColumnLeftData
