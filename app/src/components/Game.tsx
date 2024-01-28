import Property from "./Property"
import { useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import "./Game.css"
import SelectMenu from './Select'

export default function Game() {

    const [menuState, setMenuState] = useState("select")

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
                <PropertySlidingView menuState={menuState}/>
            </div>
            <SelectMenu highFunc={chooseHigher} lowFunc={chooseLower} nextFunc={nextProperty} resetFunc={resetGame} screen={menuState}></SelectMenu>
        </>
    )
}

function PropertySlidingView(props: {menuState: string, property1: any, property2: any}) {

    const prop1AnimControls = useAnimationControls()
    const prop2AnimControls = useAnimationControls()
    const prop1DivControls = useAnimationControls()
    const prop2DivControls = useAnimationControls()

    const [stretched, setStretched] = useState(false)


    useEffect(() => {
        if (props.menuState != "select")
        {
            prop2AnimControls.start({ width: "100vw", transition: {delay: 1}})
            prop2DivControls.start({ left: 0, transition: {delay: 1} })
            setStretched(true)
        }
        else if (stretched)
        {
            prop1AnimControls.set({ width: "100vw"})
            prop1DivControls.set({zIndex:1})
            prop2DivControls.set({ left: "50%"})
            prop2AnimControls.set({ width: "50vw"})
            prop1AnimControls.start({ width: "50vw"})
            prop1DivControls.start({zIndex: 0, transition: {delay: 0.5}})
            
        }
    }) 

    return (
        <div>
            <motion.div animate={prop1DivControls} className="property1">
                <Property divAnim={prop1AnimControls} priceShown={true}/>
            </motion.div>
            <motion.div animate={prop2DivControls} className="property2">
                <Property divAnim={prop2AnimControls} priceShown={props.menuState != "select"}/>
            </motion.div>
        </div>
    )
}