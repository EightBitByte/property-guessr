import './profile-modal.css'
import Modal from './Modal.tsx'
import { MouseEventHandler } from 'react'
import peteIcon from '../../public/pete.jpg'
import newIcon from '../../public/plant.svg'
import topTenIcon from '../../public/medal.svg'
import accurateIcon from '../../public/accurate.svg'

export default function ProfileModal(props: {toggleFn: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <Modal toggleFunc={props.toggleFn} title="Profile">
        <div className="profile-hero">
            <img src={peteIcon}></img>
            <div className="profile-info">
                <h1 id="username">Pete R.</h1>
                <h2 id="user-since">Since Jan 27 2024</h2>
                <div className="trophies">
                    <img src={newIcon}></img>
                    <img src={topTenIcon}></img>
                    <img src={accurateIcon}></img>
                </div>
            </div>
        </div>
        <div className="profile-details">
            <div className="profile-record">
                <div className="profile-stat">
                    <h1 id="accuracy-title">Accuracy</h1>
                    <h2 id="accuracy-perc">73%</h2>
                </div>
                <div className="profile-stat">
                    <h1 id="best-title">Highscore</h1>
                    <h2 id="best-streak">9</h2>
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