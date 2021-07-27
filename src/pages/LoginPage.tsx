import {ReactComponentElement, useState} from 'react'
import '../style/loginPage.sass';
import Textfield from "../components/Textfield";
import SubmitButton from "../components/SubmitButton";
import Feature from "../media/feature.png";

export interface LoginPageProps {
    setLogin:  React.Dispatch<React.SetStateAction<boolean>>
    setRegister: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPage: React.FC<LoginPageProps> = ( {setLogin, setRegister}: LoginPageProps ) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault()
        if(!username && !password) {
            alert('Please fill in a username and password')
            return
        } else if(!username) {
            alert('Please fill in a username')
            return
        } else if(!password) {
            alert('Please fill in a password')
            return
        } else {
            setLogin(true)
        }
        return
    }

    return(
        <div className="LoginForm" onSubmit={onSubmit}>
            <div className="LeftPanel panel">
                <form>
                    <div className="LeftPanel panel">
                        <div className="LeftPanelContent">
                            <h1> Welcome back </h1>
                            <h1> to <span> Awesome App</span>, {username} </h1>
                            <p> Sign in into your account below </p>
                            <Textfield text={username} setText={setUsername} label="Username" hidden={false}/>
                            <Textfield text={password} setText={setPassword} label="Password" hidden={true}/>
                            <a> Forgot password? </a>
                            <SubmitButton label="Sign In"/>
                            <p> Don't have an account? <a onClick={() => setRegister(true)} id="registerButton"> Register </a> </p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="RightPanel panel">
                <div className="RightPanelContent">
                    <img src={Feature}/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;