import { UserData } from "../../utils/property.types";
import Modal from "./Modal";
import "./leaderboard-modal.css"
import { MouseEventHandler, useEffect, useState } from "react";
import { getTopUsers } from "../requests"

function getLeaderClass(ranking: number) {
    switch(ranking) {
        case 1:
            return 'first';
        case 2:
            return 'second';
        case 3:
            return 'third';
        default:
            return '';
    }
}

function getRankingPostfix(ranking: number) {
    switch (ranking % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function LeaderboardEntry(props: {ranking: number, username: string, accuracy: number, streak: number}) {

    return (
        <div className="board-entry">
            <p className={`${getLeaderClass(props.ranking)} ranking`} >{props.ranking}{getRankingPostfix(props.ranking)}</p>
            <p>{props.username}</p>
            <p>{props.accuracy}</p>
            <p>{props.streak}</p>
        </div>
    )
}

function LeaderboardModal(props: {toggleFn: MouseEventHandler<HTMLButtonElement>}) {

    const [users, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        async function loadUserData() {
            setUsers(await getTopUsers())
        }

        loadUserData()
    }, [])

    return (
        <Modal toggleFunc={props.toggleFn} title="Leaderboard">
            <div className="leaderboard-wrapper">
                <div id="leaderboard-header">
                    <h3>Rank</h3>
                    <h3>Name</h3>
                    <h3>Accuracy</h3>
                    <h3>Streak</h3>
                </div>

                {
                    users.map( (user: UserData, i: number) => {
                        let userAccuracy = Math.round( (user.correct_guesses / user.total_guesses) * 100) / 100
                        return <LeaderboardEntry ranking={i + 1} username={user.username} accuracy={userAccuracy} streak={user.streak}></LeaderboardEntry>
                    } )
                }
            </div>
        </Modal>
    )
}

export default LeaderboardModal