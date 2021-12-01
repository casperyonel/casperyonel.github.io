import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Bio from './components/Bio';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

 

function App() {
  return (
    <>
      <Router>
          <NavBar />
          <div className="margin-main">
          
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />

              <Route path="*" element={<ErrorPage />} />
          </Routes>

         </div>
      </Router>
    </>
  );
}

export default App;
