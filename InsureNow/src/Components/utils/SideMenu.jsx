import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router
import './sidebar.css'

const SidebarMenu = () => {
  const [activePage, setActivePage] = useState(1); // State to manage active page

  // Sidebar menu items
  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Sales', path: '/sales' },
    { id: 3, name: 'Products', path: '/products' },
    { id: 4, name: 'Customers', path: '/customers' },
    { id: 5, name: 'Reports', path: '/reports' },
  ];

  // Function to set active page
  const setActive = (id) => {
    setActivePage(id);
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className={activePage === item.id ? 'active' : ''}>
            <NavLink to={item.path} onClick={() => setActive(item.id)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
