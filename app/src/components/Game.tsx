import { useState, useEffect } from "react"
import { PropertyData, SAMPLE_PROPERTY, UserData } from "../utils/property.types"
import { getPropertyData, updateUserData } from "./requests"

import SelectMenu from './Select'
import Streak from "./Streak"
import PropertySlidingView from "./PropertySlide"
import LoginModal from "./toolbarModals/LoginModal"


function updateUserStreak(currentStreak: number)
{
    const userData: UserData = JSON.parse(localStorage.getItem("userData"))
    
    const bestStreak = userData.streak < currentStreak ? currentStreak : userData.streak

    const newData: UserData = {
        username: userData.username,
        correct_guesses: userData.correct_guesses + currentStreak,
        total_guesses: userData.total_guesses + currentStreak + 1,
        streak: bestStreak
    }

    localStorage.setItem("userData", JSON.stringify(newData))
    updateUserData()
}


export default function Game() {

    const [menuState, setMenuState] = useState("select")

    const [property1, setProperty1] = useState<PropertyData>(SAMPLE_PROPERTY)
    const [property2, setProperty2] = useState<PropertyData>(SAMPLE_PROPERTY)
    const [streak, setStreak] = useState<number>(0)
    const [showLogin, setShowLogin] = useState<boolean>(false)

    useEffect (() => {
        async function loadPropertyData () {
            setProperty1(await getPropertyData())
        }

        loadPropertyData()
    }, [])

    useEffect (() => {
        async function getNewProperty () {
            setProperty2(await getPropertyData())
        }
        
        if (menuState == "select")
            getNewProperty()

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

            if (localStorage.getItem("userData") == null)
                setTimeout(() => setShowLogin(true), 1500)
            else
                updateUserStreak(streak)
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

            if (localStorage.getItem("userData") == null)
                setTimeout(() => setShowLogin(true), 1500)
            else
                updateUserStreak(streak)
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
            {showLogin && <LoginModal toggleFn={() => setShowLogin(false)} submitMode="update" currentStreak={streak}></LoginModal>}
            {showLogin && <div className="blur" onClick={() => setShowLogin(false)}></div>}
            <Streak streak={streak}/>
        </>
    )
}