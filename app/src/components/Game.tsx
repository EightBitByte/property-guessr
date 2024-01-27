import Property from "./Property"
import { useState } from "react"
import { useAnimationControls } from "framer-motion"
import "./Game.css"
import SelectMenu from './Select'

export default function Game() {
    return (
        <>
            <div className="game">
                <PropertySlidingView/>
            </div>
            <SelectMenu></SelectMenu>
        </>
    )
}

function PropertySlidingView() {

    const prop2AnimControls = useAnimationControls()

    return (
        <div className="property-container">
            <Property/>
            <div className="property-divider"></div>
            <Property divAnim={prop2AnimControls}/>
        </div>
    )
}