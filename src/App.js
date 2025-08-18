import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () =>{
    return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
    )
};
function App() {
  return (
    <div>
      <Routes>
          <Route  path='/' Component={HomePage} />
          <Route  path='/hats' Component={HatsPage} />
      </Routes>
      </div>
  );
}

export default App;
