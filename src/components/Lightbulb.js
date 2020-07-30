import React from 'react';
import lightbulb from '../assets/lightbulb.jpg';

const Lightbulb = ({ setLightOn, lightOn }) => {
  const handleClick = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className='image'>
      <img src={lightbulb} alt='lightbulb' className={lightOn ? '' : 'none'} />
      <button onClick={handleClick}>Flick Me</button>
    </div>
  );
};

export default Lightbulb;
