import './App.css';
import React, { useState, useEffect } from 'react';
import httpServer from './services/http.server';

function App() {
  const [data, setData] = useState({ members: ['bonjour', 'hello'] });

  useEffect(() => {
    async function fetchData() {
      await httpServer.GET('');
    }
    const fetchedData = fetchData();
    console.log(fetchedData);
    setData(fetchedData);
  }, []);

  return (
    <div>
      {data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))}
    </div>
  );
}

export default App;
