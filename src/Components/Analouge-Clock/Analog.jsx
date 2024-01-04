// Build an analog clock where the hands update like a real clock.
import { useState, useEffect } from 'react';
import './analog.css'; 

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = ((hours % 12) + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  const hourStyle = {
    transform: `rotate(${hourDegrees}deg)`,
    background: '#333' // Hour hand color
  };

  const minuteStyle = {
    transform: `rotate(${minuteDegrees}deg)`,
    background: '#555' // Minute hand color
  };

  const secondStyle = {
    transform: `rotate(${secondDegrees}deg)`,
    background: 'red' // Second hand color
  };

  return (
    <div style={{width:600 ,display:"flex",justifyContent:"center"}}>
        <div className="analog-clock">
      <div className="hand hour-hand" style={hourStyle}></div>
      <div className="hand minute-hand" style={minuteStyle}></div>
      <div className="hand second-hand" style={secondStyle}></div>
    </div>
    </div>
    
  );
};

export default Clock;

