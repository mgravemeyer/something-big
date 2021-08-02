import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import './style/global.sass';

const App = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div className="App">
      { !login && !register && <LoginPage setLogin={setLogin} setRegister={setRegister}/> }
      {/*{ login && !register && <LoginPage setLogin={setLogin}/> }*/}
      { !login && register && <RegisterPage setRegister={setRegister}/> }
    </div>
  );
}

export default App;
