import React, { useState } from "react";

const State = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      firstName: "",
      lastName: "",
    },
    step2: {
      model: "",
      price: "",
    },
    step3: {
      cardNumber: "",
      expiryDate: "",
    },
  });
  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };
  const nextStep = () => {
    setStep((next) => Math.min(next + 1, 3));
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    const currentStep = `step${step}`;

    setFormData((prev) => {
      return {
        ...prev,
        [currentStep]: {
          ...prev?.[currentStep],
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>
          <label for="first_name">firstname:</label>
          <input
            id="first_name"
            placeholder="Enter first name"
            onChange={handleChange}
            name="firstName"
            value={formData.step1.firstName}
          />
          <br />
          <br />
          <lable for="last_name">lastname:</lable>
          <input
            id="last_name"
            placeholder="Enter last name"
            onChange={handleChange}
            name="lastName"
            value={formData.step1.lastName}
          />
        </div>
      )}
      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>
          <label for="model">model:</label>
          <input
            id="model"
            placeholder="Enter car model"
            onChange={handleChange}
            name="model"
            value={formData.step2.model}
          />
          <br />
          <br />
          <label for="car_price">Price:</label>
          <input
            id="car_price"
            placeholder="Enter the price"
            onChange={handleChange}
            name="price"
            value={formData.step2.price}
          />
        </div>
      )}
      {step === 3 && (
        <div id="step3">
          <h2>Card Details</h2>
          <label for="card_info">credit card number:</label>
          <input
            id="card_info"
            placeholder="Enter card details"
            onChange={handleChange}
            name="cardNumber"
            value={formData.step3.cardNumber}
          />
          <br />
          <br />
          <label for="expiry_date">Expiry Date:</label>
          <input
            id="expiry_date"
            placeholder="Enter expiry date"
            onChange={handleChange}
            name="expiryDate"
            value={formData.step3.expiryDate}
          />
        </div>
      )}
      <div>
        {step > 1 && <button onClick={prevStep}>prev</button>}
        {step < 3 && <button onClick={nextStep}>next</button>}
        {step === 3 && <button onClick={handleSubmit}>submit</button>}
      </div>
    </div>
  );
};

export default State;
