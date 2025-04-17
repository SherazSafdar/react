import React from "react";

const Step4 = ({ onNext }) => {
  return (
    <div className="step step4">
      <h2>Choose payment method</h2>
      
      <input type="text" placeholder="Card Number" className="input" />
      <input type="text" placeholder="Expiry Date" className="input" />
      <input type="text" placeholder="CVV" className="input" />
      
      <button className="button" onClick={onNext}>PAY</button>
    </div>
  );
};

export default Step4;
