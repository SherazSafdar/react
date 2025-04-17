import React from 'react';

const Step6 = ({ onSave }) => {
  return (
    <div className="step step6">
      <h2>Preview & Save Your Duck</h2>
      <img
        src="https://em-content.zobj.net/source/apple/391/duck_1f986.png"
        alt="Final Duck"
        style={{ width: '150px' }}
      />
      <button onClick={onSave}>SAVE</button>
    </div>
  );
};

export default Step6;
