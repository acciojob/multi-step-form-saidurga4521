import React, { useState } from "react";

const State = () => {
  const [step, setStep] = useState(1);
  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };
  const nextStep = () => {
    setStep((next) => Math.min(next + 1, 3));
  };
  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Customer Details</h2>
          <label for="first_name">firstname:</label>
          <input id="first_name" placeholder="Enter first name" />
          <br />
          <br />
          <lable for="last_name">lastname:</lable>
          <input id="last_name" placeholder="Enter last name" />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Car Details</h2>
          <label for="model">model:</label>
          <input id="model" placeholder="Enter car model" />
          <br />
          <br />
          <label for="car_price">Price:</label>
          <input id="car_price" placeholder="Enter the price" />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Card Details</h2>
          <label for="card_info">credit card number:</label>
          <input id="card_info" placeholder="Enter card details" />
          <br />
          <br />
          <label for="expiry_date">Expiry Date:</label>
          <input id="expiry_date" placeholder="Enter expiry date" />
        </div>
      )}
      <div>
        {step > 1 && <button onClick={prevStep}>prev</button>}
        {step < 3 && <button onClick={nextStep}>next</button>}
        {step === 3 && <button>submit</button>}
      </div>
    </div>
  );
};

export default State;
