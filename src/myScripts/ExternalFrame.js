import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { FaSearchLocation } from "react-icons/fa";

import "../myStyles/frameBackground.scss"
import ColumnLeftData from "./leftColumn/ColumnLeftData"
import RowRightTopData from "./rightTopRow/RowRightTopData"
import RowRightBottomData from "./rightBottomRow/RowRightBottomData"
import RowMidBottomData from "./midBottomRow/RowMidBottomData"

export const AccuWeather12HourContext = React.createContext();
export const AccuWeather5DayContext = React.createContext();
export const WeatherStackContext = React.createContext();

function ExternalFrame() {

    // nikhil const accuWeatherKey = '6fJHLNcuVZzxYAl1kElDvOcwOZrKGych';
    //const accuWeatherKey = '0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2';
    const accuWeatherKey = '0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2';
    const accuWeatherBase = 'http://dataservice.accuweather.com/';
    const accuWeatherURLPart = `?apikey=${accuWeatherKey}`;
    const weatherStackKey = 'f35cc61b81d20fdddee9ad30e0fe284a';

    const [text, setText] = useState("Toronto");
    const [accuWeather12Hour, setaccuWeather12Hour] = useState([]);
    const [accuWeather5Day, setaccuWeather5Day] = useState([]);
    const [weatherStack, setweatherStack] = useState();

    async function formSubmitHandler(event) {
        event.preventDefault();
        /* ---------- Accuweather ---------- */
        //Calling to get City Key
        const reqAccuCityID = await Axios.get(`${accuWeatherBase}locations/v1/cities/search${accuWeatherURLPart}&q=${text}`);
        const accessKey = reqAccuCityID.data[0].Key;

        /* ---------- WeatherStack ---------- */
        const forecastweatherStack = `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=${text}`;
        const reqWeatherStackAPI = await Axios.get(forecastweatherStack);
        setweatherStack([reqWeatherStackAPI.data]);

        /* ----- Passing Data - Handle Accuweather Key and data ----- */
        handleAccuKey(accessKey);
    };

    async function handleAccuKey(accessKey) {
        const forecast12Hour = `${accuWeatherBase}forecasts/v1/hourly/12hour/${accessKey}${accuWeatherURLPart}`;
        const forecast5Day = `${accuWeatherBase}forecasts/v1/daily/5day/${accessKey}${accuWeatherURLPart}`;

        const req12HourForecast = await Axios.get(forecast12Hour);
        const req5DayForecast = await Axios.get(forecast5Day);

        await Axios.all([req12HourForecast, req5DayForecast]).then(
            Axios.spread((...allData) => {
                const get12HourForecast = allData[0];
                const get5DayForecast = allData[1];

                setaccuWeather12Hour([get12HourForecast.data]);
                setaccuWeather5Day([get5DayForecast.data]);
            })
        )
    }

    function inputChangeHandler(e) {
        setText(prevValue => (prevValue = e.target.value.trim()))

        console.log(text)
    }

    return (
        <AccuWeather12HourContext.Provider value={accuWeather12Hour}>
            <AccuWeather5DayContext.Provider value={accuWeather5Day}>
                <WeatherStackContext.Provider value={weatherStack}>
                    <div className="externalFrame__container">
                        <div className="container__column_Left">
                            <ColumnLeftData />
                        </div>
                        <div className="container__row_MidTop">
                            <div className="rowMidTop__Data">
                                <div className="rowMidTop__placeDetails">
                                    {
                                        (() => {
                                            if (weatherStack !== null && weatherStack !== undefined && weatherStack.length !== 0 && typeof weatherStack !== 'string') {
                                                return `${weatherStack[0].location.name}, ${weatherStack[0].location.country}`
                                            }
                                            else {
                                                return text
                                            }
                                        })()
                                    }
                                </div>
                                <form className="rowMidTop__searchDetails" onSubmit={formSubmitHandler}>
                                    <div className="rowMidTop__searchBar">
                                        <input type="text" autoComplete="off" name="searchBar" placeholder="Search..." value={text} className="input__searchBar" onChange={inputChangeHandler} />
                                        <button type="submit" className="btn__searchBar"><FaSearchLocation /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container__row_MidBottom">
                            <RowMidBottomData />
                        </div>
                        <div className="container__row_RightTop">
                            <RowRightTopData />
                        </div>
                        <div className="container__row_RightBottom">
                            <RowRightBottomData />
                        </div>
                    </div>
                </WeatherStackContext.Provider>
            </AccuWeather5DayContext.Provider>
        </AccuWeather12HourContext.Provider >
    )
}

export default ExternalFrame