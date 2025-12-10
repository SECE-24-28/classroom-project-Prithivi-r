import React, { useState, useEffect } from "react";

const UseEffectComponent3 = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1>UseEffect Practice 3</h1>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

export default UseEffectComponent3;
