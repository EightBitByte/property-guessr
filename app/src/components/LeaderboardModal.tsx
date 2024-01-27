import Modal from "./Modal";
import "./leaderboard-modal.css"
import { MouseEventHandler } from "react";

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
    return (
        <Modal toggleFunc={props.toggleFn} title="Leaderboard">
            <div className="leaderboard-wrapper">
                <div id="leaderboard-header">
                    <h3>Rank</h3>
                    <h3>Name</h3>
                    <h3>Accuracy</h3>
                    <h3>Streak</h3>
                </div>
                <LeaderboardEntry ranking={1} username="BestGamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={2} username="BetterGamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={3} username="OkayGamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={4} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={5} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={6} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={7} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={8} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={9} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={10} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={11} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={12} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={13} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={14} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={15} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={16} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={17} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={18} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={19} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={20} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={21} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={22} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={23} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={24} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={25} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={26} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={27} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={28} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={29} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={30} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
                <LeaderboardEntry ranking={31} username="Gamer" accuracy={0.99} streak={27}></LeaderboardEntry>
            </div>
        </Modal>
    )
}

export default LeaderboardModal