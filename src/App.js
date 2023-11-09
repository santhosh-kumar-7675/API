import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Team from './pages/team';
import Members from './pages/members';
import Home from './pages/home';
import { useSelector } from "react-redux";

function App() {
  const teamMembers = useSelector((state) => state.teamReducer.teamMembers);

  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
                <span className="badge">{teamMembers.length}</span>
          </li>
         
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
