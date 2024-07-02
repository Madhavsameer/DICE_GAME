
import './App.css';
import Home from './Home';
import DiceGame from './DiceGame'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Router>
        

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/DiceGame" element={<DiceGame />} />
          </Routes>
          </Router>
      
    
  );
}

export default App;
