import {ReactComponentElement, useState} from 'react';
import '../style/textfield.sass'

export interface TextfieldProps {
    text:  string
    setText:  React.Dispatch<React.SetStateAction<string>>
    label: string
}

const Textfield = ( {text, setText, label}: TextfieldProps ) => {
    return (
        <div className="input-field">
            <input id="textfield-input" type="text" value={text} onChange={(e) => setText(e.target.value)} required />
            <label htmlFor="textfield-input"> {label} </label>
        </div>
    )
}

export default Textfield;