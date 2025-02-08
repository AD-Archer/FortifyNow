import React, { useState, useEffect } from 'react';
import '../styles/Toast.css';

const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className="toast-message">
      <span>🔍 {message}</span>
    </div>
  );
};

export default Toast; 