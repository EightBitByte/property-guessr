import './settings-modal.css'
import Modal from './Modal.tsx'
import { MouseEventHandler } from 'react'

export default function SettingsModal(props: {toggleFn: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <Modal toggleFunc={props.toggleFn} title="Settings">
        <div className="Challenge-Mode">
            
        </div>
        <div className="High-Contrast">

        </div>
        <div className="Private-Session">

        </div>
        </Modal>
    )
}
