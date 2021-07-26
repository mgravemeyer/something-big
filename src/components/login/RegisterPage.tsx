import {ReactComponentElement, useState} from 'react';
import '../../style/registerPage.sass';

export interface RegisterPageProps {
    setRegister:  React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterPage: React.FC<RegisterPageProps> = ( {setRegister}: RegisterPageProps ) => {
    return (
        <div>
            <h1> Register </h1>
        </div>
    )
};

export default RegisterPage;