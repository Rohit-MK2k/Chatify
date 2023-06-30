import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Splash from './Components/Pages/Splash';
import ChatPage from './Components/Pages/ChatPage';


function App() {
  return (
    <>
      <div className="h-screen">
        <Router>
          <Routes>
            <Route path='/' element={<Splash/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Register />}></Route>
            <Route path= '/chat' element = {<ChatPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
