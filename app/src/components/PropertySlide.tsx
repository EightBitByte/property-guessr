import { motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from "react"
import { PropertyData } from "../utils/property.types"

import Property from "./Property"
import "./PropertySlide.css"

export default function PropertySlidingView(props: {menuState: string, property1: PropertyData, property2: PropertyData}) {

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