import React from "react"
import { ProgressPlugin } from "webpack"

const SimplerComponent = (props) => {
    return(
        <div onClick={props.handleClick}>I am just happy</div>
    )
}

export default SimplerComponent
