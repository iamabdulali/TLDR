// CSS

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// setting up auth stuff 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

// setting up paths 
import Auth from './Auth.js';
import Home from './Home.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="/home" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
