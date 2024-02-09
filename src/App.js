import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detector from './pages/detector';
import Home from './pages/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/detector" element={<Detector />}/>
      </Routes>
    </Router>
  )
}

export default App;
