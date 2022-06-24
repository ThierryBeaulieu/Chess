import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ members: ['bonjour', 'hello'] });

  useEffect(() => {
    fetch('http://localhost:5001/')
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
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
