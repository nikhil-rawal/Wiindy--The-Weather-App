import React, { useContext } from 'react'
import "../../myStyles/frameBackground.scss"
import Skeleton5 from "../skeletonLoading/Skeleton5"
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5"
import { BsSun } from "react-icons/bs"
import { AccuWeather5DayContext } from "../ExternalFrame"

function RowRightBottomData() {

    const Accu5 = useContext(AccuWeather5DayContext);

    return (
        <div className="rowRightBottom__Data">

            <div className="rowRightBottom__Data__FiveDayForecast">

                <div className="fiveDayForecast__Header">
                    <div className="fiveDayForecast__Header_Name">5-Day Forecast</div>
                    <div className="fiveDayForecast__Header_Value">H/L°<sup><strong>c</strong></sup></div>
                </div>
                <br />
                <div className="fiveDayForecast__Data">

                    <div className="fiveDayForecast__Data_Name">
                        {
                            (() => {
                                if (Accu5 !== undefined && Accu5.length !== 0 && typeof Accu5 !== 'string')
                                    return Accu5[0].DailyForecasts.map((element, index) => {
                                        return (
                                            <span key={index}>{element.Date.slice(0, 10)}</span>
                                        )
                                    })
                            })()
                        }
                        {
                            (() => {
                                if (Accu5 === undefined || Accu5.length === 0 || typeof Accu5 === 'string') return (
                                    [1, 2, 3, 4, 5].map((element, index) => { return <Skeleton5 key={index} /> })
                                )
                            })()
                        }
                    </div>

                    <div className="fiveDayForecast__Data_Value">
                        {
                            (() => {
                                if (Accu5 !== undefined && Accu5.length !== 0 && typeof Accu5 !== 'string')
                                    return Accu5[0].DailyForecasts.map((element, index) => {
                                        return (
                                            <span key={index}>{Math.round((element.Temperature.Maximum.Value - 32) * 5 / 9)}/{Math.round((element.Temperature.Minimum.Value - 32) * 5 / 9)}</span>
                                        )
                                    })
                            })()
                        }
                        {
                            (() => {
                                if (Accu5 === undefined || Accu5.length === 0 || typeof Accu5 === 'string') return (
                                    [1, 2, 3, 4, 5].map((element, index) => { return <Skeleton5 key={index} style={{ marginRight: '50px' }} /> })
                                )
                            })()
                        }
                    </div>

                </div>
            </div>

            <div className="data__providers_Container">
                <div className="providers_Text">Data provided in parts by</div>
                <div className="providers_Value provider_aweather"><BsSun className="providers__icon" size={25} />Accuweather.com</div>
                <div className="providers_Value provider_wstack"><IoSnowOutline className="providers__icon" size={25} />Weatherstack.com</div>
            </div>

            <div className="rowRightBottom__Data__Contact">

                <span className="contactMe_Text">Contact Me</span>

                <a rel="noopener noreferrer" href="https://nikhil-rawal-portfolio.netlify.app" target="_blank" className="contactMe__Website" ><CgWebsite className="contactMe__Website_Icon" /></a>

                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nikhilrawalplacidnikz/" target="_blank" className="contactMe__LinkedIn"><FaLinkedinIn className="contactMe__LinkedIn_Icon" /></a>

                <a rel="noopener noreferrer" href="https://github.com/placidnikz" target="_blank" className="contactMe__Github"><FaGithub className="contactMe__Github_Icon" /></a>

                <a rel="noopener noreferrer" href="https://twitter.com/placid_nikz" target="_blank" className="contactMe__Twitter"><FaTwitter className="contactMe__Twitter_Icon" /></a>

                <a rel="noopener noreferrer" href="https://www.instagram.com/placid_nikz/" target="_blank" className="contactMe__Instagram"><FaInstagram className="contactMe__Instagram_Icon" /></a>

                <a rel="noopener noreferrer" href="https://www.facebook.com/theplacidnikz" target="_blank" className="contactMe__Facebook"><FaFacebook className="contactMe__Facebook_Icon" /></a>

                <span className="contactMe__Copyright">© Nikhil Rawal</span>

            </div>

        </div>
    )
}

export default RowRightBottomData
