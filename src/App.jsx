import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6'; // ✅ New import

const App = () => {
  const [step, setStep] = useState(1);

  const handleStart = () => {
    setStep(2);
  };

  const handleClothingSelect = (id) => {
    console.log("Clothing selected:", id);
    setStep(3);
  };

  const handleAccessorySelect = (id) => {
    console.log("Accessory selected:", id);
    setStep(4);
  };

  const handleObjectSelect = (object) => {
    console.log("Object selected:", object);
    setStep(5);
  };

  const handlePayment = (paymentInfo) => {
    console.log("Payment Info:", paymentInfo);
    setStep(6); // ✅ Move to preview/save
  };

  const handleSave = () => {
    console.log("Duck saved!");
    alert("Your duck has been saved!");
  };

  return (
    <div className="app">
      {step === 1 && <Step1 onNext={handleStart} />}
      {step === 2 && <Step2 onSelectClothing={handleClothingSelect} />}
      {step === 3 && <Step3 onSelectAccessory={handleAccessorySelect} />}
      {step === 4 && <Step4 onSelectObject={handleObjectSelect} />}
      {step === 5 && <Step5 onPay={handlePayment} />}
      {step === 6 && <Step6 onSave={handleSave} />} {/* ✅ Final Step */}
    </div>
  );
};

export default App;
