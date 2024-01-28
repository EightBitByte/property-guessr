import './login-modal.css'
import Modal from './Modal'
import { MouseEventHandler } from 'react'

export default function LoginModal(props: {toggleFn: MouseEventHandler}) {
    return (
        <Modal toggleFunc={props.toggleFn} title='Login'>
            <div className="input-flex">
                <input className="username-input" type="text" id="login-input" placeholder="Username"></input>
                <button type="submit">Submit</button>
            </div>
        </Modal>
    )
}