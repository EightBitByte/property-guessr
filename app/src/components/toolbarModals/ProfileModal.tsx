import './profile-modal.css'
import Modal from './Modal.tsx'
import { MouseEventHandler } from 'react'
import peteIcon from '/pete.jpg'
import newIcon from '/plant.svg'
import topTenIcon from '/medal.svg'
import accurateIcon from '/accurate.svg'
import logoutIcon from '/logout.svg'
import { UserData } from '../../utils/property.types.ts'

export default function ProfileModal(props: {toggleFn: MouseEventHandler<HTMLButtonElement>, userData: UserData}) {
    
    const username = props.userData.username
    const bestStreak = props.userData.streak
    const accuracy = Math.round((props.userData.correct_guesses / props.userData.total_guesses) * 100)
    const total_guesses = props.userData.total_guesses

    return (
        <Modal toggleFunc={props.toggleFn} title="Profile">
        <button onClick={evt => {props.toggleFn(evt); localStorage.removeItem("userData")}} id="logout-btn">
            <img id="logout-img" src={logoutIcon}></img>
        </button>
        <div className="profile-hero">
            <img src={peteIcon}></img>
            <div className="profile-info">
                <h1 id="username">{username}</h1>
                <h2 id="user-since">Since Jan 28 2024</h2>
                <div className="trophies">
                    {total_guesses > 0 && <img src={newIcon}></img>}
                    {bestStreak > 10 && <img src={topTenIcon}></img>}
                    {accuracy > 70 && <img src={accurateIcon}></img>}
                </div>
            </div>
        </div>
        <div className="profile-details">
            <div className="profile-record">
                <div className="profile-stat">
                    <h1 id="accuracy-title">Accuracy</h1>
                    <h2 id="accuracy-perc">{accuracy}%</h2>
                </div>
                <div className="profile-stat">
                    <h1 id="best-title">Highscore</h1>
                    <h2 id="best-streak">{props.userData.streak}</h2>
                </div>
                <div className="profile-stat">
                    <h1 id="ranking-title">Ranking</h1>
                    <h2 id="ranking-place">279th</h2>
                </div>
            </div>
        </div>
        </Modal>
    )
}