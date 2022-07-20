import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Training from '../pages/Training';
import Game from '../pages/Game';
import GameManager from '../services/Game.service';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const [gameManager] = useState(new GameManager());
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    async function setCookies() {
      if (cookies.sessionId === null || cookies.sessionId === undefined) {
        setCookie('sessionId', await gameManager.getSessionId(), { path: '/' });
      }
    }
    setCookies();
  }, [setCookie, cookies, gameManager]);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />}></Route>
          <Route exact path='/game' element={<Game />}></Route>
          <Route exact path='/training' element={<Training />}></Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;