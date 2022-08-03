import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './style.css';
// import 'materialize-css';
import { 
  ALL_LEAGUES,
} from './constants';

function App() {
  const [league, setLeague] = useState(ALL_LEAGUES);

  return (
    <React.Fragment>
      <Navbar
        league={league}
        setLeague={setLeague}
      />
      <Dashboard
        league={league}
      />
    </React.Fragment>
  );
}

export default App;
