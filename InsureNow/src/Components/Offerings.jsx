// src/Components/Offerings.jsx

import React, { useState } from 'react';
import { useClientContext } from './utils/ClientContext';
import './Style.css'

const Offerings = () => {
  const { data } = useClientContext();
  const [offeringsInfo, setOfferingsInfo] = useState(data.offerings || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferingsInfo({ ...offeringsInfo, [name]: value });
  };

  const handleDownload = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'insurance_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <h2>Offerings Information</h2>
      <label>
        Product Type:
        <input
          type="text"
          name="productType"
          value={offeringsInfo.productType || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Premium:
        <input
          type="text"
          name="premium"
          value={offeringsInfo.premium || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Effective Date:
        <input
          type="date"
          name="effectiveDate"
          value={offeringsInfo.effectiveDate || ''}
          onChange={handleChange}
        />
      </label>
      <button className='btn' onClick={handleDownload}>Submit/Download</button>
    </div>
  );
};

export default Offerings;
