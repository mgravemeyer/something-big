import '../style/button.sass';

export interface SubmitButtonProps {
    label: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({label}: SubmitButtonProps) => {
    return (
        <input className="button" type='submit' value={label}/>
    )
}

export default SubmitButton;