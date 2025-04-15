'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 format string (e.g., "2025-03-16T04:00:00Z")
  raceName: string; // Add race name prop
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, raceName }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false); // To prevent hydration mismatch

  useEffect(() => {
    setIsClient(true); // Component has mounted on the client
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Add calculateTimeLeft to useEffect dependencies

  if (!isClient) {
    // Render nothing or a placeholder on the server/initial render
    return null;
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    // Don't display negative values if target date passed slightly before interval update
    const displayValue = Math.max(0, value);
    // Pad single digits with a leading zero
    const paddedValue = displayValue.toString().padStart(2, '0');

    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-red-500">
          {paddedValue}
        </span>
        <span className="text-xs uppercase text-gray-400">{interval}</span>
      </div>
    );
  });

  const timeIsUp = Object.values(timeLeft).every(val => val <= 0);

  return (
    <div className="w-full max-w-xl p-4 my-6 bg-black/50 rounded-lg shadow-md backdrop-blur-sm text-center">
      {/* Title for the countdown */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-3">
        Countdown to {raceName}
      </h2>
      {/* Timer digits container */}
      <div className="flex justify-center items-center">
        {timeIsUp ? (
          <span className="text-xl sm:text-2xl font-semibold text-yellow-400">
            Race weekend likely in progress or finished!
          </span>
        ) : (
          timerComponents
        )}
      </div>
    </div>
  );
};

export default CountdownTimer; 