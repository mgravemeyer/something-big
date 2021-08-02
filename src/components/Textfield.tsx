import '../style/textfield.sass';

export interface TextfieldProps {
    text:  string
    setText:  React.Dispatch<React.SetStateAction<string>>
    label: string
    hidden: boolean
}

const Textfield = ( {text, setText, label, hidden}: TextfieldProps ) => {
    return (
        <div className="input-field">
            <input id={label} type={hidden? "password" : "text"} value={text} onChange={(e) => setText(e.target.value)} required />
            <label htmlFor={label}> {label} </label>
        </div>
    )
}

export default Textfield;