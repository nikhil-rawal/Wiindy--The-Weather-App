import React, { useState, useContext, useEffect } from 'react'
import "../../myStyles/frameBackground.scss"
import { AccuWeather12HourContext, WeatherStackContext } from "../ExternalFrame"
import Forecast12 from "./Forecast12"
import ParamsValues from "./ParamsValues"
import SkeletonElement from "../skeletonLoading/SkeletonElement"
import SkeletonActiveParam from "../skeletonLoading/SkeletonActiveParam"
import Skeleton12 from "../skeletonLoading/Skeleton12"
import { RiWindyLine } from "react-icons/ri"
import { FaThermometerThreeQuarters, FaLeaf, FaDraftingCompass, FaRegCompass } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
import { GiFallingStar, GiWorld } from "react-icons/gi"
import { WiCloudy, WiHumidity } from "react-icons/wi"
import { BiWater } from "react-icons/bi"
import { BsBookmarkCheck } from "react-icons/bs"


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
                                                        {Math.round(stateweatherStackData.main.temp - 273.15)}<sup>°<strong>c</strong></sup>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                    {
                                        !stateweatherStackData && (() => {
                                            return (
                                                <SkeletonElement key="111111" type="title" />
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
                                            <ParamsValues key="hsla(266, 99%, 59%, 1)" bgColor="hsla(266, 99%, 59%, 1)" icon={<RiWindyLine size={23} />} value1={`Wind ${stateweatherStackData.wind.deg}°`} value2={`${parseFloat(stateweatherStackData.wind.speed * 3.6).toFixed(2)} Km/hr`} />

                                            <ParamsValues key="hsla(29, 100%, 61%, 1)" bgColor="hsla(29, 100%, 61%, 1)" icon={<FaThermometerThreeQuarters size={23} />} value1="Feels Like" value2={`${Math.round(stateweatherStackData.main.feels_like - 273.15)}°c`} />

                                            <ParamsValues key="hsla(108, 100%, 68%, 1)" bgColor="hsla(108, 100%, 68%, 1)" icon={<BiWater size={26} />} value1="Min Temp" value2={`${Math.round(stateweatherStackData.main.temp_min - 273.15)}°c`} />

                                            <ParamsValues key="hsla(49, 100%, 50%, 1)" bgColor="hsla(49, 100%, 50%, 1)" icon={<FiSun size={27} />} value1="Max Temp" value2={`${Math.round(stateweatherStackData.main.temp_max - 273.15)}°c`} />

                                        </>
                                    )
                                }
                            })()
                        }
                        {
                            !stateweatherStackData && (() => {
                                return (
                                    [1, 2, 3, 4].map((element, index) => {
                                        return (
                                            <SkeletonActiveParam key={index} />
                                        )
                                    })
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
                                            <ParamsValues key="hsla(176, 100%, 66%, 1)" bgColor="hsla(176, 100%, 66%, 1)" icon={<GiFallingStar size={26} />} value1="Visibility" value2={`${stateweatherStackData.visibility / 1000} Km`} />

                                            <ParamsValues key="hsla(205, 100%, 64%, 1)" bgColor="hsla(205, 100%, 64%, 1)" icon={<WiCloudy size={35} />} value1="Cloud Cover" value2={`${stateweatherStackData.clouds.all} %`} />

                                            <ParamsValues key="hsla(151, 75%, 59%, 1)" bgColor="hsla(151, 75%, 59%, 1)" icon={<FaLeaf size={23} />} value1="Air Pressure" value2={`${stateweatherStackData.main.pressure} MB`} />

                                            <ParamsValues key="hsla(245, 100%, 64%, 1)" bgColor="hsla(245, 100%, 64%, 1)" icon={<WiHumidity size={30} />} value1="Humidity" value2={`${stateweatherStackData.main.humidity} %`} />
                                        </>
                                    )
                                }
                            })()
                        }
                        {
                            !stateweatherStackData && (() => {
                                return (
                                    [1, 2, 3, 4].map((element, index) => {
                                        return (
                                            <SkeletonActiveParam key={index} />
                                        )
                                    })
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
                                        <ParamsValues key="hsla(0, 100%, 59%, 1)" bgColor="hsla(0, 100%, 59%, 1)" icon={<FaDraftingCompass size={22} />} value1="Latitude" value2={`${stateweatherStackData.coord.lat}°`} />

                                        <ParamsValues key="hsla(234, 98%, 61%, 1)" bgColor="hsla(234, 98%, 61%, 1)" icon={<FaRegCompass size={22} />} value1="Longitude" value2={`${stateweatherStackData.coord.lon}°`} />

                                        <ParamsValues key="hsla(299, 100%, 75%, 1)" bgColor="hsla(299, 100%, 75%, 1)" icon={<GiWorld size={22} />} value1="Time Zone" value2={`${(stateweatherStackData.timezone) / 3600} UTC`} />

                                        <ParamsValues key="hsla(346, 99%, 60%, 1)" bgColor="hsla(346, 99%, 60%, 1)" icon={<BsBookmarkCheck size={22} />} value1="Condition" value2={`${stateweatherStackData.weather[0].main}`} />
                                    </>
                                )
                            }
                        })()
                    }
                    {
                        !stateweatherStackData && (() => {
                            return (
                                [1, 2, 3, 4].map((element, index) => {
                                    return (
                                        <SkeletonActiveParam key={index} />
                                    )
                                })

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
                            else if (accu12Data === undefined || typeof accu12Data === 'string' || accu12Data.length < 1) return (
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => { return (<Skeleton12 key={index} />) })
                            )

                        })()
                    }



                </div>
            </div>
        </div>
    )
}

export default RowMidBottomData