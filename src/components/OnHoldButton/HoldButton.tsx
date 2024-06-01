import React, { useEffect, useRef, useState } from "react";
interface HoldButtonProps {
  onHold: () => void;
}

const HoldButton: React.FC<HoldButtonProps> = ({ onHold }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    setIsHolding(true);
    timeoutRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0)); // Ensure time doesn't go below zero
    }, 1000); // Update every second
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    resetTimer();
  };

  const resetTimer = () => {
    setTimeLeft(3);
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsHolding(false);
      resetTimer();
      onHold();
    }
  }, [timeLeft, onHold]);

  useEffect(() => {
    return () => {
      // Cleanup function to clear the interval when the component unmounts
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative transition-all duration-400 ease   ${isHolding ? "active" : ""}`}>
      <button
        className="bg-asiatech-red-900 text-white px-4 py-2 rounded-xl overflow-hidden w-full xl:w-fit relative left-0 top-0 right-0 bottom-0 text-center z-10 opacity-100"
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchCancel={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Handle case when the mouse leaves the button
      >
        حذف
        <div
          className={`w-0 z-[-1] bg-red-500 rounded-0 opacity-0 transition-all duration-300 ease absolute left-0 right-0 top-0 bottom-0 ${
            isHolding ? "opacity-[1] animate-progressAnim" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default HoldButton;
