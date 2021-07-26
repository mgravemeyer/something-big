import {ReactComponentElement, useState} from 'react';
import '../../style/registerPage.sass';

export interface RegisterPageProps {
    setRegister:  React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterPage: React.FC<RegisterPageProps> = ( {setRegister}: RegisterPageProps ) => {

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
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="E-Mail"/>
                    <input type="text" placeholder="Password"/>
                    <p>By clicking "Register" you agree to out Terms and Privacy Policy</p>
                    <input type='submit' value="Register"/>
                    <p>Already have an account? Sign In</p>
                </form>
            </div>
            <div className="RightPanel">
                <p> test </p>
            </div>
        </div>
    )
};

export default RegisterPage;