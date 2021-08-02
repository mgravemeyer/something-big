import { useState } from 'react';
import SubmitButton from "../components/SubmitButton";
import Textfield from "../components/Textfield";
import People from '../media/people.jpg';
import '../style/registerPage.sass';

export interface RegisterPageProps {
    setRegister:  React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterPage: React.FC<RegisterPageProps> = ( {setRegister}: RegisterPageProps ) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault()
        alert('works')
        return
    }

    return (
        <div className="RegisterForm">
            <div className="LeftPanel" onSubmit={onSubmit}>
                <h1> Create your </h1>
                <h1> account </h1>
                <form>
                    <Textfield text={username} setText={setUsername} label="Username" hidden={false}/>
                    <Textfield text={email} setText={setEmail} label="E-Mail" hidden={false}/>
                    <Textfield text={password} setText={setPassword} label="Password" hidden={true}/>
                    <p>By clicking "Register" you agree to out Terms and Privacy Policy</p>
                    <SubmitButton label="Register"/>
                    <p>Already have an account? <a onClick={() => setRegister(false)}>Sign In</a></p>
                </form>
            </div>
            <div className="RightPanel">
                <img src={People}/>
            </div>
        </div>
    )
};

export default RegisterPage;