import './App.scss';
import Movieslist from './components/Movielist';
import Navbars from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Moviedetails from './components/Moviedetails';
import Landing from './components/Landing.js';

function App() {
  return (
    <div className="App">
    <Navbars/>
    <Landing/>
    <Movieslist/>


    <Routes>
        <Route path='movie/:id' element={<Moviedetails/>}/>
    </Routes>

   

    </div>
  );
}

export default App;
