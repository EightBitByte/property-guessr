import "./Streak.css"

export default function (props: {streak: number}) {

    return (
        <div className="streak-center">
            <p className="streak-counter">Streak: {props.streak}</p>
        </div>
    )
}