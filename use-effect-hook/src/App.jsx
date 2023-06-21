import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  // Step 2: Create an effect
  useEffect(() => {
    const tick = () => setTime(new Date());

    const timerId = setInterval(tick, 1000);

    // Step 3: Clean up the timer when the component is unmounted
    return () => clearInterval(timerId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <p>The current time is: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;

