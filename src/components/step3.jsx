import React from 'react';

const Step3 = ({ onSelectAccessory }) => {
  const options = [
    { id: 1, src: "https://example.com/duck-accessory1.png" },
    { id: 2, src: "https://example.com/duck-accessory2.png" },
    { id: 3, src: "https://example.com/duck-accessory3.png" },
  ];

  return (
    <div className="step step3">
      <h2>Choose accessories</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {options.map(option => (
          <img
            key={option.id}
            src={option.src}
            alt={`Duck accessory ${option.id}`}
            style={{ width: '100px', cursor: 'pointer', border: '2px solid transparent' }}
            onClick={() => onSelectAccessory(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Step3;
