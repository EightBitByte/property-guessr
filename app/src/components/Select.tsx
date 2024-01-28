import { MouseEventHandler } from "react"
import { useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import "./Select.css"

export default function SelectMenu(props: {highFunc: MouseEventHandler, lowFunc: MouseEventHandler, 
                                            nextFunc: MouseEventHandler, resetFunc: MouseEventHandler, screen: string}) {

    const optionsVisible = (props.screen == "select")
    const nextVisible = (props.screen == "next")
    const resetVisible = (props.screen == "reset")

    const nextButtonAnim = useAnimationControls()
    const resetButtonAnim = useAnimationControls()

    useEffect(() => {
        if (nextVisible)
        {
            nextButtonAnim.start({visibility: "visible", transition: {delay: 1.5}})
        }
        else
        {
            nextButtonAnim.set({visibility: "hidden"})
        }

        if (resetVisible)
        {
            resetButtonAnim.start({visibility: "visible", transition: {delay: 1.5}})
        }
        else
        {
            resetButtonAnim.set({visibility: "hidden"})
        }
    })

    return (
        <div className="select-center">
            <div>
                {optionsVisible && <div className="selection-menu">
                    <button onClick={props.highFunc}><h1>HIGHER</h1></button>
                    <h1>OR</h1>
                    <button onClick={props.lowFunc}><h1>LOWER</h1></button>
                </div>}
                <div className="reset-next-menu">
                    <motion.button initial={{visibility: "hidden"}} animate={nextButtonAnim} onClick={props.nextFunc}><h1>Next</h1></motion.button>
                    <motion.button initial={{visibility: "hidden"}} animate={resetButtonAnim} onClick={props.resetFunc}><h1>Reset</h1></motion.button>
                </div>
            </div>
        </div>
    )
}       