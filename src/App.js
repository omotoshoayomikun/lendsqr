import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/auth/Login.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} ></Route>
    </Routes>
  );
}

export default App;
