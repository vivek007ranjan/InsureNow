import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Client.css';
import { useAuth } from './utils/Auth';
import { createContext } from 'react';

export const ClientContext = createContext();

const ClientTrail = () => {
  const [data, setData] = useState({
    account: {},
    location: {},
    building: {},
    coverage: {},
    offerings: {}
  });

  const [activePage, setActivePage] = useState(1); // State to manage active page

  // Sidebar menu items
  const menuItems = [
    { id: 1, name: 'Account', path: 'account' },
    { id: 2, name: 'Location', path: 'location' },
    { id: 3, name: 'Buildings', path: 'building' },
    { id: 4, name: 'Coverage', path: 'coverage' },
    { id: 5, name: 'Offerings', path: 'offerings' },
  ];

  // Function to set active page
  const setActive = (id) => {
    console.log(`clicked item : ${id}`);
    setActivePage(id);
  };

  const navigate = useNavigate();
  const auth = useAuth();

  const clickhandler = () => {
    console.log(`user:${auth.username} logged out.`);
    auth.logout();
    navigate('/login');
  };

  return (
    <ClientContext.Provider value={{ data, setData }}>
      <div className='layout'>
        <header className="header-client">
          <span className='logo-place'> InsureNow</span>
          <div className="timeline">
            {menuItems.map((item) => (
              <span
                key={item.id}
                className={`dot ${item.id <= activePage ? 'active' : ''}`}
              ></span>
            ))}
          </div>
          <button className='btn' onClick={clickhandler}>Logout</button>
        </header>

        <div className='main-container'>
          <div className="sidebar">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={activePage === item.id ? 'active' : ''}
                >
                   <NavLink to={`/Client/${item.path}`} onClick={() => setActive(item.id)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="main">
              <Outlet />
            </div>
          </div>
        </div>
    
    </ClientContext.Provider>
  );
};

export default ClientTrail;
