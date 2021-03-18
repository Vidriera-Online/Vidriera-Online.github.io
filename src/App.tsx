import React from 'react';
// import logo from './logo.svg';

import { HashRouter } from 'react-router-dom'
import MobileNavMenu from './components/MobileNavMenu';

import Router from './views'

function App() {
  return (
    //Hash router solo para github
    <HashRouter>
      <Router />
      <MobileNavMenu />
    </HashRouter>
  );
}

export default App;
