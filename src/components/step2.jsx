import React from 'react';

const Step2 = ({ onSelectClothing }) => {
  const options = [
    { id: 1, src: "https://example.com/duck1.png" },
    { id: 2, src: "https://example.com/duck2.png" },
    { id: 3, src: "https://example.com/duck3.png" },
  ];

  return (
    <div className="step step2">
      <h2>Choose clothing</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {options.map(option => (
          <img
            key={option.id}
            src={option.src}
            alt={`Duck outfit ${option.id}`}
            style={{ width: '100px', cursor: 'pointer', border: '2px solid transparent' }}
            onClick={() => onSelectClothing(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Step2;
