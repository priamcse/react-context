import React, { useRef } from "react";

const CashOnDelivery = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cashOnDeliveryHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const address = addressInputRef.current.value;
    const paymentInfo = {
      name,
      email,
      address,
    };
    alert(JSON.stringify(paymentInfo));
    console.log(JSON.stringify(paymentInfo));
  };

  return (
    <div>
      <form onSubmit={cashOnDeliveryHandler}>
        <div className="mb-2">
          <div className="form-label mb-2">Name</div>
          <div>
            <input
              type="text"
              className="form-text"
              ref={nameInputRef}
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <div className="form-label mb-2">Email</div>
          <div>
            <input
              type="email"
              className="form-text"
              ref={emailInputRef}
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <div className="form-label mb-2">Address</div>
          <div>
            <textarea
              className="form-textarea"
              ref={addressInputRef}
              required
            />
          </div>
        </div>
        <div>
          <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CashOnDelivery;
