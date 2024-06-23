// src/Components/Location.jsx

import React, { useState } from 'react';
import { useClientContext } from './utils/ClientContext';

const Location = () => {
  const { data, setData } = useClientContext();
  const [locationInfo, setLocationInfo] = useState(data.location || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationInfo({ ...locationInfo, [name]: value });
    setData({ ...data, location: { ...locationInfo, [name]: value } });
  };

  return (
    <div>
      <h2>Location Information</h2>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={locationInfo.address || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={locationInfo.city || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={locationInfo.state || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={locationInfo.zip || ''}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Location;
