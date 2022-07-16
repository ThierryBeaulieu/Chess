import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import Training from './screens/Training';
import Game from './screens/Game';
import GameManager from './services/GameManager.service';

function App() {
  const [sessionId, setSessionId] = useState('defaultSessionId');

  async function updateSessionId() {
    const gameManager = new GameManager();
    try {
      const fetchedSessionId = gameManager.getSessionId();
      console.log(fetchedSessionId);
      setSessionId(fetchedSessionId);
    } catch (e) {}
  }
  function handleSessionId() {
    sessionStorage.clear();
    updateSessionId();
    sessionStorage.setItem('sessionId', sessionId);
  }

  useEffect(() => {
    handleSessionId();
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
