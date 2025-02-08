import React from 'react';
import { useNavigate } from 'react-router-dom';

const EducationalResourcesButton = ({ children = "Return to LearningHub" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/educational-resources');
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default EducationalResourcesButton;