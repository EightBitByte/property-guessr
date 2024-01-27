import { useState } from 'react'
import './toolbar.css'
import accountIcon from '../../public/account.svg'
import settingsIcon from '../../public/settings.svg'
import leaderIcon from '../../public/leaderboard.svg'
import SettingsModal from './SettingsModal'

export default function Toolbar() {
    const [leaderboardVisible, setLeaderboardVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [accountVisible, setAccountVisible] = useState(false);

    return (
        <>
        <div className="center">
            <SettingsModal></SettingsModal>
        </div>
        <div className="blur"></div>
        <div id="toolbar-wrap">
            <button className="tool-btn">
                <img src={leaderIcon}></img>
            </button>
            <button className="tool-btn">
                <img src={settingsIcon}></img>
            </button>
            <button className="tool-btn">
                <img src={accountIcon}></img>
            </button>
        </div>
        </>
    )
}
