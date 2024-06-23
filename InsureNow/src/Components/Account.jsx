// src/Components/Account.jsx

import React, { useState } from 'react';
import { useClientContext } from './utils/ClientContext';

const Account = () => {
  const { data, setData } = useClientContext();
  const [accountInfo, setAccountInfo] = useState(data.account || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
    setData({ ...data, account: { ...accountInfo, [name]: value } });
  };

  return (
    <div>
      <h2>Account Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={accountInfo.name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={accountInfo.email || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={accountInfo.phone || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={accountInfo.dob || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Social Security Number:
        <input
          type="text"
          name="ssn"
          value={accountInfo.ssn || ''}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Account;
