import { useState, useEffect, useCallback, useRef } from 'react';

export const useIdleTimer = (timeoutMs = 30000) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (isIdle) setIsIdle(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, timeoutMs);
  }, [isIdle, timeoutMs]);

  useEffect(() => {
    // Initial start
    resetTimer();

    // Event listeners for activity
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    
    // Throttle the reset slightly to avoid overwhelming
    let throttling = false;
    const handleActivity = () => {
      if (!throttling) {
        resetTimer();
        throttling = true;
        setTimeout(() => (throttling = false), 500);
      }
    };

    events.forEach(event => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [resetTimer]);

  return isIdle;
};
