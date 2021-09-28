import React, { useState } from 'react'
import Axios from "axios";
import { FaSearchLocation } from "react-icons/fa";
import AlgoliaPlaces from 'algolia-places-react';

import "../myStyles/frameBackground.scss"
import ColumnLeftData from "./leftColumn/ColumnLeftData"
import RowRightTopData from "./rightTopRow/RowRightTopData"
import RowRightBottomData from "./rightBottomRow/RowRightBottomData"
import RowMidBottomData from "./midBottomRow/RowMidBottomData"

export const AccuWeather12HourContext = React.createContext();
export const AccuWeather5DayContext = React.createContext();
export const WeatherStackContext = React.createContext();

function ExternalFrame() {

    const accuWeatherKey = process.env.REACT_APP_ACCUWEATHERKEY;
    const accuWeatherBase = 'http://dataservice.accuweather.com/';
    const accuWeatherURLPart = `?apikey=${accuWeatherKey}`;
    const weatherStackKey = process.env.REACT_APP_WEATHERSTACKKEY;

    const [name, setname] = useState("");
    const [lat, setlat] = useState("");
    const [lng, setlng] = useState("");
    const [accuWeather12Hour, setaccuWeather12Hour] = useState([]);
    const [accuWeather5Day, setaccuWeather5Day] = useState([]);
    const [weatherStack, setweatherStack] = useState([]);
    const [error, seterror] = useState(null);

    async function handleAccuKey(accessKey) {
        try {
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
        catch (err) {
            if (err.response) {
                console.error(`Error occured. ${err.response}`)
                seterror([err.response])
            } else if (err.request) {
                console.error(`Error occured. ${err.request}`)
                seterror([err.request])
            } else {
                console.error(`Error occured. ${err}`)
                seterror([err])
            }
        }
    }

    async function handleweather(latt, lonn) {
        try {
            /* ---------- WeatherStack ---------- */
            const forecastweatherStack = `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${lonn}&appid=${weatherStackKey}`;
            const reqWeatherStackAPI = await Axios.get(forecastweatherStack);
            setweatherStack([reqWeatherStackAPI.data]);
        }
        catch (err) {
            if (err.response) {
                console.error(`Error occured. ${err.response}`)
                seterror([err.response])
            } else if (err.request) {
                console.error(`Error occured. ${err.request}`)
                seterror([err.request])
            } else {
                console.error(`Error occured. ${err}`)
                seterror([err])
            }

        }
    }

    async function formSubmitHandler(event) {
        event.preventDefault();
        /* ---------- Accuweather ---------- */
        //Calling to get City Key
        try {
            const reqAccuCityID = await Axios.get(`${accuWeatherBase}locations/v1/cities/search${accuWeatherURLPart}&q=${lat}%2C${lng}`);
            const accessKey = reqAccuCityID.data[0].Key;

            /* ----- Passing Data - Handle Accuweather Key and data ----- */
            handleAccuKey(accessKey);
            /* ----- Passing Data - Handle Weatherstack ----- */
            handleweather(lat, lng);
        }
        catch (err) {
            if (err.response) {
                console.error(`Error occured. ${err.response}`)
                seterror([err.response])
            } else if (err.request) {
                console.error(`Error occured. ${err.request}`)
                seterror([err.request])
            } else {
                console.error(`Error occured. ${err}`)
                seterror([err])
            }

        }

    };

    return (
        <AccuWeather12HourContext.Provider value={accuWeather12Hour}>
            <AccuWeather5DayContext.Provider value={accuWeather5Day}>
                <WeatherStackContext.Provider value={weatherStack[0]}>
                    {
                        error && (() => {
                            if (error !== undefined && error.length !== 0 && error !== null) {
                                console.error('An error occured')
                            }
                        })()
                    }
                    <div className="externalFrame__container">

                        <div className="container__column_Left">
                            <ColumnLeftData />
                        </div>
                        <div className="container__row_MidTop">
                            <div className="rowMidTop__Data">
                                <div className="rowMidTop__placeDetails">
                                    {name}
                                </div>
                                <form className="rowMidTop__searchDetails" onSubmit={formSubmitHandler}>
                                    <div className="rowMidTop__searchBar">
                                        <AlgoliaPlaces
                                            className="input__searchBar"
                                            autoComplete="off"
                                            name="searchBar"
                                            placeholder="Type Place and Press Enter"
                                            style={{ width: "220px" }}
                                            onChange={({ suggestion }) => {
                                                setlat(prevValue => prevValue = suggestion.latlng.lat)
                                                setlng(prevValue => prevValue = suggestion.latlng.lng)
                                                setname(prevValue => prevValue = `${suggestion.name}, ${suggestion.country}`)
                                            }}
                                            onLimit={
                                                ({ message }) =>
                                                    console.error('Limit reached. Please try again in 60 minutes. Error Message: ' + message)}

                                            onError={
                                                ({ message }) =>
                                                    console.error('Could not make request. Please try again later. Error Message: ' + message)}
                                        />
                                        {/* <input type="text" autoComplete="off" name="searchBar" placeholder="Search..." value={text} className="input__searchBar" onChange={inputChangeHandler} /> */}
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