import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/login" element={<Login />} />

        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
