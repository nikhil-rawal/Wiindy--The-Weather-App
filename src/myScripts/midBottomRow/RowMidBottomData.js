import React, { useState, useContext, useEffect } from 'react'
import "../../myStyles/frameBackground.scss"
import { AccuWeather12HourContext, WeatherStackContext } from "../ExternalFrame"
import Forecast12 from "./Forecast12"
import ParamsValues from "./ParamsValues"
import SkeletonElement from "../skeletonLoading/SkeletonElement"
import SkeletonActiveParam from "../skeletonLoading/SkeletonActiveParam"
import { RiWindyLine } from "react-icons/ri"
import { FaThermometerThreeQuarters, FaLeaf, FaDraftingCompass, FaRegCompass } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
import { GiFallingStar, GiWorld } from "react-icons/gi"
import { WiCloudy, WiHumidity } from "react-icons/wi"
import { BiWater } from "react-icons/bi"
import { ImClock } from "react-icons/im"


function RowMidBottomData() {

    const Accu12 = useContext(AccuWeather12HourContext);
    const WeatherStack = useContext(WeatherStackContext);

    const [accu12Data, setaccu12Data] = useState(null);
    const [stateweatherStackData, setweatherStackData] = useState(null);

    useEffect(() => {
        setaccu12Data(Accu12);
    }, [Accu12])

    useEffect(() => {
        setweatherStackData(WeatherStack);
    }, [WeatherStack])


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
                                    {
                                        stateweatherStackData && (() => {
                                            if (stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
                                                return (
                                                    <>
                                                        {stateweatherStackData[0].current.temperature}<sup>°<strong>c</strong></sup>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                    {
                                        (stateweatherStackData === null) && (() => {
                                            return (
                                                console.log(<SkeletonActiveParam />)
                                            )

                                        })()
                                    }
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
                        {
                            stateweatherStackData && (() => {
                                if (stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
                                    return (
                                        <>
                                            <ParamsValues bgColor="hsla(266, 99%, 59%, 1)" icon={<RiWindyLine size={23} />} value1={`${stateweatherStackData[0].current.wind_degree}°${stateweatherStackData[0].current.wind_dir}`} value2={`${stateweatherStackData[0].current.wind_speed} Km/hr`} />

                                            <ParamsValues bgColor="hsla(29, 100%, 61%, 1)" icon={<FaThermometerThreeQuarters size={23} />} value1="Feels Like" value2={`${stateweatherStackData[0].current.feelslike}°c`} />

                                            <ParamsValues bgColor="hsla(49, 100%, 50%, 1)" icon={<FiSun size={27} />} value1="UV Index" value2={stateweatherStackData[0].current.uv_index} />

                                            <ParamsValues bgColor="hsla(151, 75%, 59%, 1)" icon={<FaLeaf size={23} />} value1="Air Pressure" value2={`${stateweatherStackData[0].current.pressure} MB`} />
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <SkeletonElement type="thumbnail" />
                                    )
                                }
                            })()
                        }
                        {
                            (stateweatherStackData === null) && (() => {
                                return (
                                    console.log('ws null', stateweatherStackData)
                                )

                            })()
                        }
                    </div>

                    <div className="parameters__Right">
                        {
                            stateweatherStackData && (() => {
                                if (stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
                                    return (
                                        <>
                                            <ParamsValues bgColor="hsla(176, 100%, 66%, 1)" icon={<GiFallingStar size={26} />} value1="Visibility" value2={`${stateweatherStackData[0].current.visibility} Km/hr`} />

                                            <ParamsValues bgColor="hsla(205, 100%, 64%, 1)" icon={<WiCloudy size={35} />} value1="Cloud Cover" value2={`${stateweatherStackData[0].current.cloudcover} %`} />

                                            <ParamsValues bgColor="hsla(108, 100%, 68%, 1)" icon={<BiWater size={26} />} value1="Precipitation" value2={`${stateweatherStackData[0].current.precip} MM`} />

                                            <ParamsValues bgColor="hsla(245, 100%, 64%, 1)" icon={<WiHumidity size={30} />} value1="Humidity" value2={`${stateweatherStackData[0].current.humidity} %`} />
                                        </>
                                    )
                                }
                            })()
                        }
                        {
                            (stateweatherStackData === null) && (() => {
                                return (
                                    console.log('ws null', stateweatherStackData)
                                )
                            })()
                        }
                    </div>

                </div>
            </div>

            <div className="data__description_Container">
                <div className="description_Text">Description</div>
                <div className="description_Value">
                    {
                        stateweatherStackData && (() => {
                            if (stateweatherStackData !== undefined && stateweatherStackData.length !== 0 && typeof stateweatherStackData !== 'string') {
                                return (
                                    <>
                                        <ParamsValues bgColor="hsla(0, 100%, 59%, 1)" icon={<FaDraftingCompass size={22} />} value1="Latitude" value2={`${stateweatherStackData[0].location.lat}°`} />

                                        <ParamsValues bgColor="hsla(234, 98%, 61%, 1)" icon={<FaRegCompass size={22} />} value1="Longitude" value2={`${stateweatherStackData[0].location.lon}°`} />

                                        <ParamsValues bgColor="hsla(299, 100%, 75%, 1)" icon={<GiWorld size={22} />} value1="Time Zone" value2={`${stateweatherStackData[0].location.utc_offset} UTC`} />

                                        <ParamsValues bgColor="hsla(346, 99%, 60%, 1)" icon={<ImClock size={22} />} value1="Local Time" value2={`${stateweatherStackData[0].location.localtime.slice(11, 16)}`} />
                                    </>
                                )
                            }
                        })()
                    }
                    {
                        (stateweatherStackData === null) && (() => {
                            return (
                                console.log('ws null', stateweatherStackData)
                            )
                        })()
                    }
                </div>
            </div>

            <div className="data__forecast12Hour_Container">
                <div className="forecast12Hour_Text">12-Hour Forecast</div>
                <div className="forecast12Hour_Value">

                    {
                        accu12Data && (() => {
                            if (accu12Data !== undefined && accu12Data.length !== 0 && typeof accu12Data !== 'string') {
                                return accu12Data[0].map((element, index) => {
                                    return (
                                        <Forecast12 key={index} time={element.DateTime.slice(11, 16)} icon={element.WeatherIcon} temp={Math.round((element.Temperature.Value - 32) * 5 / 9)} />
                                    )
                                })

                            }
                        })()
                    }
                    {
                        (accu12Data === null) && (() => {
                            return (
                                console.log('Acu 12 null', accu12Data)
                            )

                        })()
                    }


                </div>
            </div>
        </div>
    )
}

export default RowMidBottomData



/* <ParamsValues bgColor="hsla(266, 99%, 59%, 1)" icon={<RiWindyLine />} value1={`${WeatherStack[0].current.wind_degree}°${WeatherStack[0].current.wind_dir}`} value2={`${WeatherStack[0].current.wind_speed} Km/hr`} />

                                        <ParamsValues bgColor="hsla(29, 100%, 61%, 1)" icon={<FaThermometerThreeQuarters />} value1="Feels Like" value2={`${WeatherStack[0].current.feelslike}°c`} />

                                        <ParamsValues bgColor="hsla(49, 100%, 50%, 1)" icon={<FiSun />} value1="UV Index" value2={WeatherStack[0].current.uv_index} />

                                        <ParamsValues bgColor="hsla(151, 75%, 59%, 1)" icon={<FaLeaf />} value1="Air Pressure" value2={`${WeatherStack[0].current.pressure} MB`} />


                                       <ParamsValues bgColor="hsla(176, 100%, 66%, 1)" icon={<GiFallingStar />} value1="Visibility" value2={`${WeatherStack[0].current.visibility} Km/hr`} />

                                        <ParamsValues bgColor="hsla(205, 100%, 64%, 1)" icon={<WiCloudy />} value1="Cloud Cover" value2={`${WeatherStack[0].current.cloudcover} %`} />

                                        <ParamsValues bgColor="hsla(108, 100%, 68%, 1)" icon={<BiWater />} value1="Precipitation" value2={`${WeatherStack[0].current.precip} MM`} />

                                        <ParamsValues bgColor="hsla(245, 100%, 64%, 1)" icon={<WiHumidity />} value1="Humidity" value2={`${WeatherStack[0].current.humidity} %`} />


                                        */