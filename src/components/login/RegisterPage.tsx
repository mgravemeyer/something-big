import {ReactComponentElement, useState} from 'react';
// import '../../style/registerPage.sass';
import People from '../../media/people.jpg';
import Textfield from "../Textfield";

export interface RegisterPageProps {
    setRegister:  React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterPage: React.FC<RegisterPageProps> = ( {setRegister}: RegisterPageProps ) => {

    const [username, setUsername] = useState("");

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
                    <Textfield text={username} setText={setUsername} label="Username"/>
                    {/*<div className="input-field">*/}
                    {/*<input id="name" type="text" required/>*/}
                    {/*<label htmlFor="name">Your name:</label>*/}
                    {/*<input type="text" placeholder="E-Mail"/>*/}
                    {/*<input type="text" placeholder="Password"/>*/}
                    {/*<p>By clicking "Register" you agree to out Terms and Privacy Policy</p>*/}
                    {/*<input type='submit' value="Register"/>*/}
                    {/*<p>Already have an account? <a onClick={() => setRegister(false)}>Sign In</a></p>*/}
                    {/*</div>*/}
                </form>
            </div>
            {/*<div className="RightPanel">*/}
            {/*    <img src={People}/>*/}
            {/*</div>*/}
        </div>
    )
};

export default RegisterPage;