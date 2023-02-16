import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/auth/Login.tsx';
import Layout from './Components/Layouts/Layout';
import Users from './Components/Pages/Users/Users';
import UserDetail from './Components/Pages/Users/UserDetail';
import GeneralDetails from './Components/Pages/Users/GeneralDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} ></Route>
      <Route path='admin' element={<Layout />}>
        <Route index element={<Users />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetail />}>
          <Route index element={<GeneralDetails />} />
          <Route path='general-details' element={<GeneralDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
