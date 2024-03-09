import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.js";
import Info from "./Pages/Info.js";
import Dashboard from "./Pages/Dashboard.js";
import Default from "./Pages/Default.js";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Info" element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
