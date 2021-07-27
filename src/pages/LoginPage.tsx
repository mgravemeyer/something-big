import {ReactComponentElement, useState} from 'react';
import '../style/loginPage.sass';
import Textfield from "../components/Textfield";
import SubmitButton from "../components/SubmitButton";
import Feature from "../media/feature.png";
import Logo from "../media/logo.png";

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
                            <img src={Logo}/>
                            <div className="HeadlineContainer">
                                <h1> Welcome back <br/>  to <span> Freelance Station</span> </h1>
                            </div>
                            <p id="info-text"> Sign in into your account below </p>
                            <Textfield text={username} setText={setUsername} label="Username" hidden={false}/>
                            <Textfield text={password} setText={setPassword} label="Password" hidden={true}/>
                            <a> Forgot password? </a> <br/>
                            <SubmitButton label="Sign In"/>
                            <p id="register-text"> Don't have an account? <a onClick={() => setRegister(true)} id="registerButton"> <span id="higlighted">Register</span></a> </p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="RightPanel panel">
                <div className="RightPanelContent">
                    <p id="feature-ad">NEW FEATURE</p>
                    <p id="headline-ad">Campaign Dashboard with <span id="blue">Gantt View</span></p>
                    <div id="text-ad-wrapper">
                        <p id="text-add">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum</p>
                        <a id="learn-more-ad">Learn more</a>
                    </div>
                    <img src={Feature}/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;