import './toolbar.css'
import accountIcon from '../../public/account.svg'
import settingsIcon from '../../public/settings.svg'
import leaderIcon from '../../public/leaderboard.svg'

export default function Toolbar() {
    return (
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
    )
}
