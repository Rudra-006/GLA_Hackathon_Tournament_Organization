import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import TournamentApp from './Components/TournamentApp';
import Join from './Components/Join';
import Create from './Components/Create';
import Homepage from './Components/Homepage'
import TournamentList from './Components/TournamentList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='Join' element={<Join/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='tournamentApp' element={<TournamentApp/>}/>
        <Route path='tournamentList' element={<TournamentList/>}/>
        </Routes>
    </div>
  );
}

export default App;
