// src/Components/utils/ClientContext.js

import React, { createContext, useContext, useState } from 'react';

const ClientContext = createContext();

export const useClientContext = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
  const [data, setData] = useState({
    account: {},
    location: {},
    building: {},
    coverage: {},
    offerings: {},
  });

  return (
    <ClientContext.Provider value={{ data, setData }}>
      {children}
    </ClientContext.Provider>
  );
};
