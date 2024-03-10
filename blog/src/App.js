import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.js";
import Info from "./Pages/Info.js";
import Gallery from './Pages/Gallery.js';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Info" element={<Info />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
