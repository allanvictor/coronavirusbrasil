import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './pages/Header';
import PWABanner from './components/PwaBanner';
import './assets/css/main.css';

function App() {
  return (

      <MemoryRouter>
        <>
          <Header title="CORONA VÍRUS BRASIL"/>
          <Routes />
          <PWABanner />
        </>
      </MemoryRouter>

  );
}

export default App;
