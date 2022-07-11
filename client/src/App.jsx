import './App.css';
import React, { useState, useEffect } from 'react';
import httpServer from './services/http.template';
import MainPage from './screens/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Training from './screens/Training';
import Game from './screens/Game';

function App() {
  const [data, setData] = useState({ members: ['bonjour', 'hello'] });

  async function fetchData() {
    setData(await httpServer.GET(''));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route exact path='/game' element={<Game />}></Route>
        <Route exact path='/training' element={<Training />}></Route>
      </Routes>
    </BrowserRouter>
    /*
    <div>
      {data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))}
    </div>
    */
  );
}

export default App;
