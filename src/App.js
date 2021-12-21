import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/home.js'
import Music from './components/music.js';
import Art from './components/art.js';
import DisplayImage from './components/displayImage.js';
import Poetry from './components/poetry';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/poetry" element={<Poetry/>}/>
          <Route path="/image" element={<DisplayImage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
