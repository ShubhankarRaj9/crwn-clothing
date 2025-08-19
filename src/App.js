import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop-page/shop.component.jsx';

function App() {
  return (
    <div>
      <Routes>
          <Route  path='/' Component={HomePage} />
          <Route  path='/shop' Component={ShopPage} />
      </Routes>
      </div>
  );
}

export default App;
