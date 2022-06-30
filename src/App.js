import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/login" element={<Login />} />

        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
