import logo from './logo.svg';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component=
            {Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
