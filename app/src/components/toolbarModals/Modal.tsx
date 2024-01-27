import { MouseEventHandler, ReactNode } from "react";
import backIcon from '../../public/back.svg'
import './modal.css'

export default function Modal(props: {toggleFunc: MouseEventHandler<HTMLButtonElement>, title: string, children: ReactNode}) {
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