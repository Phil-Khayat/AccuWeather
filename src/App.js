import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Favorites from './components/Favorites.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>      
    </div>

  );
}

export default App;
