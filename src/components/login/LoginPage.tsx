import {ReactComponentElement, useState} from 'react'
import '../../style/loginPage.sass';

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
            <form>
                <h1> Welcome back </h1>
                <h1> to <span> Awesome App</span>, {username} </h1>
                <p> Sign in into your account below </p>
                <input className="inputText" type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <a> Forgot password? </a>
                <input type='submit' value="Sign in"/>
                <p> Don't have an account? <a onClick={() => setRegister(true)} id="registerButton"> Register </a> </p>
            </form>
        </div>
    )
}

export default LoginPage;