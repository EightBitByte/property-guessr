import "./Select.css"

export default function SelectMenu(props: any) {
    return (
        <div className="center">
            <div className="selection-menu">
                <button><h2>Higher</h2></button>
                <h2>OR</h2>
                <button><h2>Lower</h2></button>
            </div>
        </div>
    )
}   