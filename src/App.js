import './App.css';

// added bootstrao
import "bootstrap/dist/css/bootstrap.min.css"

//setting up auth stuff 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from './Auth.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
