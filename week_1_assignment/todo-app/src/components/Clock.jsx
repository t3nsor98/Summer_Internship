import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="text-center mt-4">
      <p
        className="text-white text-3xl font-semibold bg-black p-2 rounded"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Clock;
