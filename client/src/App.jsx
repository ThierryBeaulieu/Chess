import './App.css';
import React, { useState, useEffect } from 'react';
import httpServer from './services/http.server';
import MainPage from './screens/MainPage';

function App() {
  const [data, setData] = useState({ members: ['bonjour', 'hello'] });

  async function fetchData() {
    setData(await httpServer.GET(''));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainPage />
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
