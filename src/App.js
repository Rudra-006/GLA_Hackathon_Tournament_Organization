import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Auth/Signup";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from './Components/Auth/Login'
import TournamentApp from "./Components/TournamentApp";
import Join from "./Components/Join";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/tournamentApp" element={<TournamentApp />}/>
      </Routes>
    </div>
  );
}

export default App;
