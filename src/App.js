import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import { useContext } from 'react';
import { data } from './Context';

function App() {
  return (
    <div>
     <Login/>
     <Profile/>
    </div>
  );
}

export default App;
