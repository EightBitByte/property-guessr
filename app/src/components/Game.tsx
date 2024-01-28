import { useState, useEffect } from "react"
import { PropertyData, SAMPLE_PROPERTY } from "../utils/property.types"
import { getPropertyData } from "./requests"

import SelectMenu from './Select'
import Streak from "./Streak"
import PropertySlidingView from "./PropertySlide"


export default function Game() {

    const [menuState, setMenuState] = useState("select")

    const [property1, setProperty1] = useState<PropertyData>(SAMPLE_PROPERTY)
    const [property2, setProperty2] = useState<PropertyData>(SAMPLE_PROPERTY)
    const [streak, setStreak] = useState<number>(0)

    useEffect (() => {
        async function loadPropertyData () {
            setProperty1(await getPropertyData())
            console.log("Initial property get")
        }

        loadPropertyData()
    }, [])

    useEffect (() => {
        async function getNewProperty () {
            setProperty2(await getPropertyData())
            console.log("New property get")
        }
        
        if (menuState == "select")
        {
            getNewProperty()
        }
    }, [menuState])

    function chooseHigher() {
        if (property1.assessed_total <= property2.assessed_total)
        {
            setMenuState("next")
            setStreak(streak + 1)
        }
        else
        {
            setMenuState("reset")
        }
    }

    function chooseLower() {
        if (property1.assessed_total >= property2.assessed_total)
        {
            setMenuState("next")
            setStreak(streak + 1)
        }
        else
        {
            setMenuState("reset")
        }
    }

    function nextProperty() {
        setMenuState("select")
        setProperty1(property2)
    }

    function resetGame() {
        setMenuState("select")
        setProperty1(property2)
        setStreak(0)
    }

    return (
        <>
            <div className="game">
                <PropertySlidingView property1={property1} property2={property2} menuState={menuState}/>
            </div>
            <SelectMenu highFunc={chooseHigher} lowFunc={chooseLower} nextFunc={nextProperty} resetFunc={resetGame} screen={menuState}></SelectMenu>
            <Streak streak={streak}/>
        </>
    )
}