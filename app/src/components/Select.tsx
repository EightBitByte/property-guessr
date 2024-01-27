import "./Select.css"

export default function SelectMenu(props: any) {
    return (
        <div className="select-center">
            <div className  ="selection-menu">
                <button><h1>Higher</h1></button>
                <h1>OR</h1>
                <button><h1>Lower</h1></button>
            </div>
        </div>
    )
}       