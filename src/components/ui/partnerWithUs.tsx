import React, { useState } from 'react';
import PartnerForm from './Partnerform';
 // Assuming PartnerForm is in the same directory

const PartnerWithUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-md mx-auto mt-2">
      <button
        onClick={handleButtonClick}
        className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600"
      >
        Partner With Us
      </button>

      {showForm && (
        <div className="mt-6">
          <PartnerForm />
        </div>
      )}
    </div>
  );
};

export default PartnerWithUs;
