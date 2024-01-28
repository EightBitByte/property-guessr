import { ReactNode, MouseEventHandler } from "react";
import backIcon from '/back.svg'
import './modal.css'

export default function Modal(props: {toggleFunc: MouseEventHandler, title: string, children: ReactNode}) {
    return (
        <div className="center">
            <dialog className="modal" open>
                <div className="modal-header">
                    <button className="back-btn" onClick={props.toggleFunc}>
                        <img src={backIcon}></img>
                    </button>
                    <h1 id="profile-title">{props.title}</h1>
                </div>
                {props.children}
            </dialog>
        </div>
    );
}