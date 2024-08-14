import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/Library';
import Player from '../player/Player';
import Explore from '../explore/Explore';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import Admin from '../admin/Admin';
import MusicAddUpdate from '../Music/MusicAddUpdate';
export default function Home() {
  useEffect(() => {
    window.location.hash = '';
  }, []);
  return (
    <Router>
      <div className="main-body flex bg-primaryOrange">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/admin/musics" element={<Admin />} />
          <Route path="/admin/music/add" element={<MusicAddUpdate />} />
          <Route path="/admin/music/:musicId" element={<MusicAddUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}
