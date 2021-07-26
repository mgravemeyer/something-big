import React, {useState} from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage';

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
        { !login && <LoginPage setLogin={setLogin}/> }
    </div>
  );
}

export default App;
