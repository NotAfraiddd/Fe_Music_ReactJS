import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/Library';
import Player from '../player/Player';
import Explore from '../explore/Explore';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
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
        </Routes>
      </div>
    </Router>
  );
}
