import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../screens/MainPage';
import Training from '../screens/Training';
import Game from '../screens/Game';
import GameManager from '../services/GameManager.service';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const gameManager = new GameManager();
  const [cookies, setCookie] = useCookies(['user']);
  const [sessionId] = useState(async () => {
    return await gameManager.getSessionId();
  });

  useEffect(() => {
    async function setCookies() {
      console.log(cookies);
      if (cookies) {
        setCookie('sessionId', await sessionId, { path: '/' });
      }
    }
    setCookies();
  }, [sessionId, setCookie, cookies]);

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
