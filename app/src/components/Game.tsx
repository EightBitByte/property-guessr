import Property from "./Property"
import { useState } from "react"
import "./Game.css"


export default function Game() {
    return (
        <div className="game">
            <PropertySlidingView/>
        </div>
    )
}

function PropertySlidingView() {

    return (
        <div className="property-container">
            <Property/>
            <div className="property-divider"></div>
            <Property/>
        </div>
    )
}