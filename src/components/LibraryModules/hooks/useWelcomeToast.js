import { useState, useEffect } from 'react';

export const useWelcomeToast = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Show toast after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return [showToast, setShowToast];
}; 