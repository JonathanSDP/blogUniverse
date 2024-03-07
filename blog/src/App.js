import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Dashboard from "./Pages/Dashboard.js";
import Default from "./Pages/Default.js";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
