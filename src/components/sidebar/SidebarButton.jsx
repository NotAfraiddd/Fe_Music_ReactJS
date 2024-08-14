import React from 'react';
import './SidebarButton.css';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
export default function SidebarButton({ title, to, icon }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const classActive = isActive ? 'btn-container active' : 'btn-container';
  return (
    <Link to={to} className={`w-full h-20 rounded-[20px] text-[#F8D9C0] hover:text-white flex flex-col items-center justify-center my-1 ${classActive}`}>
      <IconContext.Provider value={{ size: '24px' }}>
        {icon}
        <span>{title}</span>
      </IconContext.Provider>
    </Link >
  );
}
