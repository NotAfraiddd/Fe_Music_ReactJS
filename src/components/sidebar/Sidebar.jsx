import React, { useEffect } from 'react';
import './Sidebar.css';
import BaseImage from '../BaseImage';
import SidebarButton from './SidebarButton';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { example } from '../../style/image';
export default function Sidebar() {
  useEffect(() => {});
  return (
    <div className="sidebar-container mx-1 h-full flex flex-col items-center justify-between">
      <BaseImage src={example} className={`object-cover aspect-auto`} />
      <div className="min-w-[100px]">
        <SidebarButton title="Explore" to="/explore" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
