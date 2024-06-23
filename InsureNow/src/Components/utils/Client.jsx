import React, { useState } from 'react';
import './Client.css';


const Client = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="app">
      <header className="header-client">
        <div className="timeline">
          {tabs.map((_, index) => (
            <span
              key={index}
              className={`dot ${index <= activeTab ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </header>
      <div className="content">
        <nav className="nav">
          <ul>
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab ? 'active' : ''}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
        <main className="main">
          <h1>{tabs[activeTab]}</h1>
          <p>Content for {tabs[activeTab]}</p>
        </main>
      </div>
    </div>
  );
};

export default Client;
