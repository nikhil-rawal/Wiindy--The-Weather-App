import React, { useContext, useEffect } from 'react'
import "../../myStyles/frameBackground.scss"
import { CgWebsite } from "react-icons/cg";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { AccuWeather5DayContext } from "../ExternalFrame"

function RowRightBottomData() {

    const Accu5 = useContext(AccuWeather5DayContext);

    /* useEffect(() => {
        if ((Accu5 === undefined) || (Accu5.length === 0)) return;
        change5DayData(Accu5);
    }, [Accu5])

    function change5DayData(data5Days) {
        console.log(document.querySelector(".fiveDayForecast__Data"));
        console.log(document.querySelector(".fiveDayForecast__Data").children);
    } */

    return (
        <div className="rowRightBottom__Data">

            <div className="rowRightBottom__Data__FiveDayForecast">

                <div className="fiveDayForecast__Header">
                    <div className="fiveDayForecast__Header_Name">Five Day Forecast</div>
                    <div className="fiveDayForecast__Header_Value">H/L</div>
                </div>

                <div className="fiveDayForecast__Data">
                    <div className="fiveDayForecast__Data_Name">
                        <span>Day 1</span>
                        <span>Day 2</span>
                        <span>Day 3</span>
                        <span>Day 4</span>
                        <span>Day 5</span>
                    </div>
                    <div className="fiveDayForecast__Data_Value">
                        <span>Temp 1</span>
                        <span>Temp 2</span>
                        <span>Temp 3</span>
                        <span>Temp 4</span>
                        <span>Temp 5</span>
                    </div>
                </div>
            </div>

            <div className="rowRightBottom__Data__Contact">

                <span className="contactMe_Text">Contact Me</span>

                <a href="https://nikhil-rawal-portfolio.netlify.app" className="contactMe__Website"><CgWebsite className="contactMe__Website_Icon" /></a>
                <a href="https://www.linkedin.com/in/nikhilrawalplacidnikz/" className="contactMe__LinkedIn"><FaLinkedinIn className="contactMe__LinkedIn_Icon" /></a>
                <a href="https://github.com/placidnikz" className="contactMe__Github"><FaGithub className="contactMe__Github_Icon" /></a>
                <a href="https://twitter.com/placid_nikz" className="contactMe__Twitter"><FaTwitter className="contactMe__Twitter_Icon" /></a>
                <a href="https://www.instagram.com/placid_nikz/" className="contactMe__Instagram"><FaInstagram className="contactMe__Instagram_Icon" /></a>
                <a href="https://www.facebook.com/theplacidnikz" className="contactMe__Facebook"><FaFacebook className="contactMe__Facebook_Icon" /></a>

                <span className="contactMe__Copyright">© Nikhil Rawal</span>

            </div>

        </div>
    )
}

export default RowRightBottomData
