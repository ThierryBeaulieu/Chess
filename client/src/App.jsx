import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import Training from './screens/Training';
import Game from './screens/Game';
import GameManager from './services/GameManager.service';

function App() {
  const gameManager = new GameManager();
  const [sessionId, setSessionId] = useState(async () => {
    return await gameManager.getSessionId();
  });

  useEffect(() => {
    async function setSession() {
      sessionStorage.setItem('sessionId', await sessionId);
    }
    setSession();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route exact path='/game' element={<Game />}></Route>
        <Route exact path='/training' element={<Training />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
