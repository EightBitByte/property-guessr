import { useState } from 'react'
import './toolbar.css'
import accountIcon from '../../public/account.svg'
import settingsIcon from '../../public/settings.svg'
import leaderIcon from '../../public/leaderboard.svg'
import ProfileModal from './ProfileModal'

export default function Toolbar() {
    const [leaderboardVisible, setLeaderboardVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);

    const toggleProfileVisibility = () => {
        setProfileVisible(!profileVisible);
    };

    const toggleSettingsVisibility = () => {
        setSettingsVisible(!settingsVisible);
    };

    const toggleLeaderboardVisibility = () => {
        setLeaderboardVisible(!leaderboardVisible);
    };

    return (
        <>
        {profileVisible && <ProfileModal profileToggle={toggleProfileVisibility}></ProfileModal>}
        {(settingsVisible || profileVisible || leaderboardVisible) && <div className="blur"></div>}
        <div id="toolbar-wrap">
            <button className="tool-btn">
                <img src={leaderIcon}></img>
            </button>
            <button className="tool-btn">
                <img src={settingsIcon}></img>
            </button>
            <button className="tool-btn" onClick={toggleProfileVisibility}>
                <img src={accountIcon}></img>
            </button>
        </div>
        </>
    )
}
