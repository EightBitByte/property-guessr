import './settings-modal.css'
import Modal from './Modal.tsx'
import { MouseEventHandler, ReactNode, useState } from 'react'

function OptionRadio(props: {rowName: string, radioName: string, btnText: string, changeFunc: Function, isActive: boolean}) {
    return (
        <>
            <label htmlFor={props.radioName} className={`option-btn ${props.isActive ? "active-btn" : "" }`}>
                {props.btnText}
            </label>
            <input 
             type="radio" 
             name={props.rowName} 
             id={props.radioName}
             onChange={(event) => {
                props.changeFunc(Number(event.target.id.slice(-1)));
            }}
            />
        </>
    )
}

function OptionsBar(props: {children: ReactNode, optionTitle: string}) {
    return (
        <div className="row-bar">
            <div className="option-title">
                <h1>{props.optionTitle}</h1>
            </div>
            <div className="row-buttons">
                {props.children}
            </div>
        </div>
    )
}

function SettingsModal(props: {toggleFn: MouseEventHandler<HTMLButtonElement>}) {
    const [challengeState, setChallengeState] = useState(Number(localStorage.getItem("challengeState")));
    const [accessibilityState, setAccessibilityState] = useState(Number(localStorage.getItem("accessibilityState")));
    const [privacyState, setPrivacyState] = useState(Number(localStorage.getItem("privacyState")));

    const updateChallenge = (challengeNum: number) => {
        setChallengeState(challengeNum);
        localStorage.setItem("challengeState", `${challengeNum}`) 
    }

    const updateAccessibility = (isOn: number) => {
        setAccessibilityState(isOn);
        localStorage.setItem("accessibilityState", `${isOn}`) 
    }

    const updatePrivacy = (isOn: number) => {
        setPrivacyState(isOn);
        localStorage.setItem("privacyState", `${isOn}`) 
    }

    return (
        <Modal toggleFunc={props.toggleFn} title="Settings">
            <div className="challenge-options">
                <OptionsBar optionTitle="Challenges">
                    <OptionRadio rowName="challenges" radioName="challenge-0" btnText="Normal" changeFunc={updateChallenge} isActive={challengeState === 0}></OptionRadio>
                    <OptionRadio rowName="challenges" radioName="challenge-1" btnText="$$$" changeFunc={updateChallenge} isActive={challengeState === 1}></OptionRadio>
                    <OptionRadio rowName="challenges" radioName="challenge-2" btnText="-_-" changeFunc={updateChallenge} isActive={challengeState === 2}></OptionRadio>
                </OptionsBar>
            </div>
            <div className="contrast-options">
                <OptionsBar optionTitle="High Contrast">
                    <OptionRadio rowName="accessibility" radioName="accessibility-0" btnText="Off" changeFunc={updateAccessibility} isActive={accessibilityState === 0}></OptionRadio>
                    <OptionRadio rowName="accessibility" radioName="accessibility-1" btnText="On" changeFunc={updateAccessibility} isActive={accessibilityState === 1}></OptionRadio>
                </OptionsBar>
            </div>
            <div className="private-options">
                <OptionsBar optionTitle="Privacy">
                    <OptionRadio rowName="privacy" radioName="privacy-0" btnText="Off" changeFunc={updatePrivacy} isActive={privacyState === 0}></OptionRadio>
                    <OptionRadio rowName="privacy" radioName="privacy-1" btnText="On"changeFunc={updatePrivacy} isActive={privacyState === 1}></OptionRadio>
                </OptionsBar>
            </div>
        </Modal>
    )
}

export default SettingsModal;