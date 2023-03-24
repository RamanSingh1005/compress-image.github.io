import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} 
        from "react-router-dom";
import Login from './components/loginPage';
import RegistrationPage from './components/registerPage';
import ImageUploadPage from './components/uploadimagePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="page1" element={<Login />} />
            <Route path="page2" element={<RegistrationPage />} />
          <Route path="page3" element={<ImageUploadPage />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Login</Link></li>
            <li><Link to="page2">Register</Link></li>
            <li><Link to="page3">Upload image</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  )
}

export default App
