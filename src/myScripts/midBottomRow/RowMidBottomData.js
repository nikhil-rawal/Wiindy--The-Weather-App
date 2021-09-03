import React, { useContext, useEffect } from 'react'
import "../../myStyles/frameBackground.scss"
import { AccuWeather12HourContext, AccuWeather5DayContext, WeatherStackContext } from "../ExternalFrame"

function RowMidBottomData() {

    const Accu12 = useContext(AccuWeather12HourContext);
    const Accu5 = useContext(AccuWeather5DayContext);
    const WeatherStack = useContext(WeatherStackContext);

    useEffect(() => {
        if ((Accu12 === undefined) || (Accu12.length === 0)) return;
        console.log("Mid Bottom - Use Context - Accu12", Accu12[0]);
    }, [Accu12])
    useEffect(() => {
        if ((Accu5 === undefined) || (Accu5.length === 0)) return;
        console.log("Mid Bottom - Use Context - Accu5", Accu5[0]);
    }, [Accu5])
    useEffect(() => {
        if ((WeatherStack === undefined) || (WeatherStack.length === 0)) return;
        console.log("Mid Bottom - Use Context - Weatherstack", WeatherStack[0]);
    }, [WeatherStack])

    return (
        <div className="rowMidBottom__Data">
            <div className="data__currentTemp_Container">
                <div className="currentTemp_Text">Temperature</div>
                <div className="currentTemp_Value">32</div>
            </div>
            <div className="data__providers_Container">
                <div className="providers_Text">Data provided in parts by</div>
                <div className="providers_Value">2 providers</div>
            </div>
            <div className="data__activeParameters_Container">
                <div className="activeParameters_Text">Active Parameters</div>
                <div className="activeParameters_Value">
                    Here new value,{Accu5.map(item => <p key={item.DailyForecasts.length}>{item.Headline.Category}</p>)}
                </div>
            </div>
            <div className="data__description_Container">
                <div className="description_Text">Description</div>
                <div className="description_Value">desc</div>
            </div>
            <div className="data__forecast12Hour_Container">
                <div className="forecast12Hour_Text">12-Hour Forecast</div>
                <div className="forecast12Hour_Value">long forecast map data array</div>
            </div>
        </div>
    )
}

export default RowMidBottomData
