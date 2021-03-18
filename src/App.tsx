import React from 'react';
// import logo from './logo.svg';

import { BrowserRouter } from 'react-router-dom'
import MobileNavMenu from './components/MobileNavMenu';

import Router from './views'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <MobileNavMenu />
    </BrowserRouter>
  );
}

export default App;
