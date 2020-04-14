import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './pages/Header';

import './assets/css/main.css';

function App() {
  return (

      <MemoryRouter>
        <>
          <Header title="CORONA VÍRUS BRASIL"/>
          <Routes />
        </>
      </MemoryRouter>

  );
}

export default App;
