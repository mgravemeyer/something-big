import {ReactComponentElement, useState} from 'react';

export interface TextfieldProps {
    text:  string
    setText:  React.Dispatch<React.SetStateAction<string>>
    label: string
}

const Textfield = ( {text, setText, label}: TextfieldProps ) => {
    return (
        <div className="input-field">
            <input id="textfield" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="textfield"> {label} </label>
        </div>
    )
}

export default Textfield;