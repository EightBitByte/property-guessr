import './login-modal.css'
import Modal from './Modal'
import { MouseEventHandler, useState } from 'react'

import { updateUserData, getUserData } from "../requests"
import { UserData } from '../../utils/property.types'

export default function LoginModal(props: {toggleFn: MouseEventHandler, submitMode: string, currentStreak: number}) {

    const [username, setUsername] = useState("")

    function updateData(evt: React.MouseEvent) {
        let newUserData: UserData = {
            username: username,
            correct_guesses: props.currentStreak,
            total_guesses: props.currentStreak + 1,
            streak: props.currentStreak
        }
        localStorage.setItem("userData", JSON.stringify(newUserData))
        updateUserData()
        props.toggleFn(evt)
    }

    function getData(evt: React.MouseEvent) {
        getUserData(username)
        props.toggleFn(evt)
    }

    return (
        <Modal toggleFunc={props.toggleFn} title='Login'>
            <div className="input-flex">
                <input className="username-input" type="text" id="login-input" placeholder="Username" onChange={evt => {setUsername(evt.target.value)}}></input>
                { props.submitMode == "update" && <button onClick={updateData} type="submit">Submit</button> }
                { props.submitMode == "get" && <button onClick={getData} type="submit">Submit</button> }
            </div>
        </Modal>
    )
}