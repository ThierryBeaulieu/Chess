import './App.css';
//import React, { useState, useEffect } from 'react';
import ThreeScene from './threejs/three-scene';

function App() {
  //const [data, setData] = useState({ members: ['bonjour', 'hello'] });

  /*
  useEffect(() => {
    fetch('http://localhost:5001/')
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  */

  return (
    /*
    <div>
      {data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))}
    </div>
    */
    <div>
      <ThreeScene />
    </div>
  );
}

export default App;
