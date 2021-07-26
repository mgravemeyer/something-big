import {ReactComponentElement, useState} from 'react'
import '../../style/loginPage.sass';

export interface LoginPageProps {
    setLogin:  React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPage: React.FC<LoginPageProps> = ( {setLogin}: LoginPageProps ) => {

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
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' value="Login"/>
            </form>
        </div>
    )
}

export default LoginPage;