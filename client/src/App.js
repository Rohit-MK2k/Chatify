import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Splash from './Components/Pages/Splash';


function App() {
  return (
    <>
      <div className="h-screen">
        <Router>
          <Routes>
            <Route path='/' element={<Splash/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Register/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
