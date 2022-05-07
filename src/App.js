import './App.css';
import Navbar from './components/navbar';
import { Route,Routes ,Router } from 'react-router-dom';
import SecondPage from './components/secondPage';
import PhoneSignUp from './components/PhoneSignUp';
import Admin from './components/admin';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
        path="/"
        element={<PhoneSignUp/>}/>
        <Route
        path="/secondPage"
        element={<SecondPage/>}/>
        <Route 
        path="/admin"
        element={<Admin/>}/>
      </Routes>
    </> );
}

export default App;
