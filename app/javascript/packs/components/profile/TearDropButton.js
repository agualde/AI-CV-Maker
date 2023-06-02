import React from 'react';
import './tearDropButton.scss';

const TearDropButton = ({ text, onClick }) => {
  return (
    <div className="tearDropContainer">
      <button className="tearDropButton" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default TearDropButton;