import { useState } from 'react'
import './toolbar.css'
import profileIcon from '/account.svg'
import settingsIcon from '/settings.svg'
import leaderIcon from '/leaderboard.svg'
import ProfileModal from './ProfileModal'
import LeaderboardModal from './LeaderboardModal'
import SettingsModal from './SettingsModal'

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

    const getCurrentToggleFn = () => {
        if (leaderboardVisible)
            toggleLeaderboardVisibility();
        else if (settingsVisible)
            toggleSettingsVisibility();
        else
            toggleProfileVisibility();
    }

    return (
        <>
        {profileVisible && <ProfileModal toggleFn={toggleProfileVisibility}></ProfileModal>}
        {leaderboardVisible && <LeaderboardModal toggleFn={toggleLeaderboardVisibility}></LeaderboardModal>}
        {settingsVisible && <SettingsModal toggleFn={toggleSettingsVisibility}></SettingsModal>}
        {(settingsVisible || profileVisible || leaderboardVisible) && <div className="blur" onClick={getCurrentToggleFn}></div>}
        <div id="toolbar-wrap">
            <button className="tool-btn" id="leaderboard-btn" onClick={toggleLeaderboardVisibility}>
                <img src={leaderIcon}></img>
            </button>
            <button className="tool-btn" id="settings-btn" onClick={toggleSettingsVisibility}>
                <img src={settingsIcon}></img>
            </button>
            <button className="tool-btn" id="profile-btn" onClick={toggleProfileVisibility}>
                <img src={profileIcon}></img>
            </button>
        </div>
        </>
    )
}
