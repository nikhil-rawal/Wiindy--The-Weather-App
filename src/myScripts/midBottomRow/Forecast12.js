import React from 'react'


function Forecast12(props) {

    return (
        <div className="f12__container">
            <div className="f12__time">{props.time}</div>
            <div className="f12__icon"><img src={`/accu12Icons/${props.icon}.png`} alt="Weather Type Icon" /></div>
            <div className="f12__temp">{props.temp}<sup>°<strong>c</strong></sup></div>
        </div>
    )
}

export default Forecast12