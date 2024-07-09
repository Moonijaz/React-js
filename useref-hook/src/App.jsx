import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null); // Step 2: Create a ref

  useEffect(() => {
    inputRef.current.style.backgroundColor = red; // Step 4: Use the ref to focus the input
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <input ref={inputRef} type="text" /> {/* Step 3: Attach the ref */}
    </div>
  );
}

export default App;
