import React, { useState, useContext, useEffect } from 'react';
import { WeatherStackContext } from "../ExternalFrame"
import "../../myStyles/frameBackground.scss"
import { MdDashboard } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { GrSafariOption } from "react-icons/gr";

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
    let layerUrl = "";

    if (stateweatherStackData !== null && stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
        lat = stateweatherStackData.coord.lat;
        lon = stateweatherStackData.coord.lon;
        url = `https://www.google.com/maps/@${lat},${lon},11z`;
        targ = "_blank";
        layerUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=clouds&lat=${lat}&lon=${lon}&zoom=11`;
    }

    return (
        <div className="columnLeftData__Button">
            <MdDashboard className="icon__Left" size={42} style={{ color: "hsl(269, 99%, 61%)" }} />
            <a href={url} target={targ} style={{ margin: 0 }} onMouseOver={(e) => { e.target.style.color = "hsl(269, 99%, 61%)" }} onMouseOut={(e) => { e.target.style.color = "hsla(251, 7%, 71%, 1)" }}><FaMapMarkerAlt className="map__icon icon__Left" size={42} /></a>
            <a href={layerUrl} target={targ} style={{ margin: 0 }} onMouseOver={(e) => { e.target.style.color = "hsl(269, 99%, 61%)" }} onMouseOut={(e) => { e.target.style.color = "hsla(251, 7%, 71%, 1)" }}><GrSafariOption className="map2__icon icon__Left" size={42} /></a>
            <a href="https://github.com/placidnikz/Wiindy--The-Weather-App" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }} onMouseOver={(e) => { e.target.style.color = "hsl(269, 99%, 61%)" }} onMouseOut={(e) => { e.target.style.color = "hsla(251, 7%, 71%, 1)" }}><BsCodeSlash className="get__code icon__Left" size={42} /></a>
            {/* <FaLightbulb onClick={lightsOff} className="lights_Off" size={42} />
            <FaRegLightbulb onClick={lightsOn} className="lights_On" size={42} /> */}
        </div>
    )
}

export default ColumnLeftData
