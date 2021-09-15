import React, { useState, useContext, useEffect } from 'react';
import { WeatherStackContext } from "../ExternalFrame"
import "../../myStyles/frameBackground.scss"
import { MdDashboard } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

function ColumnLeftData() {

    const WeatherStack = useContext(WeatherStackContext);
    const [stateweatherStackData, setweatherStackData] = useState(null);

    useEffect(() => {
        setweatherStackData(WeatherStack);
    }, [WeatherStack])

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
            <a href={url} target={targ} style={{ margin: 0 }} onMouseOver={(e) => { e.target.style.color = "hsl(269, 99%, 61%)" }} onMouseOut={(e) => { e.target.style.color = "hsla(251, 7%, 71%, 1)" }}><FaMapMarkerAlt className="map__icon" size={42} /></a>
            <a href="https://github.com/placidnikz/Wiindy--The-Weather-App" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }} onMouseOver={(e) => { e.target.style.color = "hsl(269, 99%, 61%)" }} onMouseOut={(e) => { e.target.style.color = "hsla(251, 7%, 71%, 1)" }}><BsCodeSlash className="get__code" size={42} /></a>
            {/* <FaLightbulb onClick={lightsOff} className="lights_Off" size={42} />
            <FaRegLightbulb onClick={lightsOn} className="lights_On" size={42} /> */}
        </div>
    )
}

export default ColumnLeftData
