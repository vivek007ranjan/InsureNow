// src/Components/Coverages.jsx

import React, { useState } from 'react';
import { useClientContext } from './utils/ClientContext';

const Coverages = () => {
  const { data, setData } = useClientContext();
  const [coveragesInfo, setCoveragesInfo] = useState(data.coverage || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoveragesInfo({ ...coveragesInfo, [name]: value });
    setData({ ...data, coverage: { ...coveragesInfo, [name]: value } });
  };

  return (
    <div>
      <h2>Coverages Information</h2>
      <label>
        Policy Type:
        <input
          type="text"
          name="policyType"
          value={coveragesInfo.policyType || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Coverage Amount:
        <input
          type="text"
          name="coverageAmount"
          value={coveragesInfo.coverageAmount || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Deductible:
        <input
          type="text"
          name="deductible"
          value={coveragesInfo.deductible || ''}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Coverages;
