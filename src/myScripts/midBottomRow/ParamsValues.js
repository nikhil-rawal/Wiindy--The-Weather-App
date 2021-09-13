import React from 'react'

function ParamsValues(props) {

    return (<div className="params_Container">
        <div className="param_Box wind_Box" style={{ backgroundColor: props.bgColor }}>
            <div className="param_Icon">{props.icon}</div>
        </div>
        <div className="param_Values">
            <div className="param_Value1">{props.value1}</div>
            <div className="param_Value2">{props.value2}</div>
        </div>

    </div>
    )
}

export default ParamsValues
