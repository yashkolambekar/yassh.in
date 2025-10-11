"use client";

import { useState, useEffect } from 'react';
import Digit from './digit';
import "./clock.css";

function App() {
  // create a state for the current time
  const [date, setDate] = useState(new Date());

  // set up interval to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // get current time digits
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const time = [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#131313] text-white">
        <div className='flex flex-row flex-wrap gap-[3em] transition-all duration-500 ease-in-out'>
          <div className='flex flex-row'>
            <Digit char={time[0]} />
            <Digit char={time[1]} />
          </div>
          <div className='flex flex-row'>
            <Digit char={time[2]} />
            <Digit char={time[3]} />
          </div>
          <div className='flex flex-row'>
            <Digit char={time[4]} />
            <Digit char={time[5]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
