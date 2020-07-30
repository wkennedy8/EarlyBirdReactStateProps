import React, { useState } from 'react';
import Lightbulb from './components/Lightbulb';
import './App.css';

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className={lightOn ? 'App' : 'black'}>
      <Lightbulb lightOn={lightOn} setLightOn={setLightOn} />
    </div>
  );
}

export default App;
