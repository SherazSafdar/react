import React from 'react';

const Step1 = ({ onNext }) => {
  return (
    <div className="step step1">
      <h2>Create your own duck</h2>
      <img
        src="https://em-content.zobj.net/source/apple/391/duck_1f986.png"
        alt="duck"
        style={{ width: '100px', margin: '20px 0' }}
      />
      <button onClick={onNext} style={{ backgroundColor: '#FFD700', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
        START
      </button>
    </div>
  );
};

export default Step1;
