// src/Components/Building.jsx

import React, { useState } from 'react';
import { useClientContext } from './utils/ClientContext';

const Building = () => {
  const { data, setData } = useClientContext();
  const [buildingInfo, setBuildingInfo] = useState(data.building || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuildingInfo({ ...buildingInfo, [name]: value });
    setData({ ...data, building: { ...buildingInfo, [name]: value } });
  };

  return (
    <div>
      <h2>Building Information</h2>
      <label>
        Building Type:
        <input
          type="text"
          name="type"
          value={buildingInfo.type || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Year Built:
        <input
          type="text"
          name="yearBuilt"
          value={buildingInfo.yearBuilt || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Construction Type:
        <input
          type="text"
          name="constructionType"
          value={buildingInfo.constructionType || ''}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Building;
