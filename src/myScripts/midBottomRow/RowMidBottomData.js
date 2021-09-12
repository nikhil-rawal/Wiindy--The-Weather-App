import React, { useContext, useEffect } from 'react'
import "../../myStyles/frameBackground.scss"
import { AccuWeather12HourContext, AccuWeather5DayContext, WeatherStackContext } from "../ExternalFrame"
import Forecast12 from "./Forecast12"
import ParamsValues from "./ParamsValues"
function RowMidBottomData() {

    const Accu12 = useContext(AccuWeather12HourContext);
    // const Accu5 = useContext(AccuWeather5DayContext);
    const WeatherStack = useContext(WeatherStackContext);

    console.log(WeatherStack[0].current)

    return (
        <div className="rowMidBottom__Data">

            <div className="data__currentTemp_Container">
                <div className="currentTemp_Text">Temperature</div>

                <div className="currentTemp_Value">
                    <div className="outerMostValue_Circle">
                        <div className="tempVal_outerCircle">
                            <div className="animationCircle">
                            </div>
                            <div className="tempVal_innerCircle">
                                <div className="tempVal">
                                    32
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="data__activeParameters_Container">
                <div className="activeParameters_Text">Active Parameters</div>

                <div className="activeParameters_Value">

                    <div className="parameters__Left">
                        <ParamsValues value1="value1" />

                    </div>

                    <div className="parameters__Right">

                    </div>

                </div>
            </div>
            <div className="data__description_Container">
                <div className="description_Text">Description</div>
                <div className="description_Value">desc</div>
            </div>
            <div className="data__forecast12Hour_Container">
                <div className="forecast12Hour_Text">12-Hour Forecast</div>
                <div className="forecast12Hour_Value">
                    {
                        (() => {
                            if (Accu12 !== undefined && Accu12.length !== 0 && typeof Accu12 !== 'string') {
                                return Accu12[0].map((element, index) => {
                                    return (
                                        <Forecast12 key={index} time={element.DateTime.slice(11, 16)} icon={element.WeatherIcon} temp={Math.round((element.Temperature.Value - 32) * 5 / 9)} />
                                    )
                                })

                            }
                        })()
                    }

                </div>
            </div>
        </div>
    )
}

export default RowMidBottomData
