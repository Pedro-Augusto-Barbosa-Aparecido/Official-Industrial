import './styles/global.scss'

import React from 'react';

import {
  BrowserRouter
} from 'react-router-dom'
import MainRoute from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
