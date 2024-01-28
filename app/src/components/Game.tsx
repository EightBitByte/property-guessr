import Property from "./Property"
import { useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import "./Game.css"
import SelectMenu from './Select'

import { PropertyData } from "../utils/property.types"
import exampleJSON from "../utils/examples.json"

function getPropertyData(n: number): PropertyData {
    
    /*
    fetch("stuff goes here").then(response => {
        response.json().then(data => {
            return JSON.parse(data)
        })
    })
    */

    return exampleJSON.data[n]
}


export default function Game() {

    const [menuState, setMenuState] = useState("select")

    const [property1, setProperty1] = useState<PropertyData>(getPropertyData(0))
    const [property2, setProperty2] = useState<PropertyData>(getPropertyData(1))

    useEffect (() => {
        setProperty1(getPropertyData(0))
        setProperty2(getPropertyData(1))
        console.log("got first property data")
    }, [])

    function chooseHigher() {
        setMenuState("next")
    }

    function chooseLower() {
        setMenuState("reset")
    }

    function nextProperty() {
        setMenuState("select")
        //swap property data
    }

    function resetGame() {
        setMenuState("select")
    }

    return (
        <>
            <div className="game">
                <PropertySlidingView property1={property1} property2={property2} menuState={menuState}/>
            </div>
            <SelectMenu highFunc={chooseHigher} lowFunc={chooseLower} nextFunc={nextProperty} resetFunc={resetGame} screen={menuState}></SelectMenu>
        </>
    )
}

function PropertySlidingView(props: {menuState: string, property1: PropertyData, property2: PropertyData}) {

    const prop1DivControls = useAnimationControls()
    const prop2DivControls = useAnimationControls()

    const [stretched, setStretched] = useState(false)


    useEffect(() => {
        if (props.menuState != "select")
        {
            prop2DivControls.start({ width: "100vw", left: 0, transition: {delay: 1} })
            setStretched(true)
        }
        else if (stretched)
        {
            prop1DivControls.set({zIndex:1, width: "100vw" })
            prop2DivControls.set({ width: "50vw", left: "50%" })
            prop1DivControls.start({ width: "50vw"})
            prop1DivControls.start({ zIndex: 0, transition: {delay: 0.5} })
            
        }
    }) 

    return (
        <div>
            <motion.div initial={{width: "50vw"}} animate={prop1DivControls} className="property1">
                <Property priceShown={true} propertyData={props.property1}/>
            </motion.div>
            <motion.div initial={{width: "50vw"}} animate={prop2DivControls} className="property2">
                <Property priceShown={props.menuState != "select"} propertyData={props.property2}/>
            </motion.div>
        </div>
    )
}