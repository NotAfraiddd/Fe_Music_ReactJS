import React from 'react';
import './AlbumImage.css';
export default function AlbumImage({ url }) {
  return (
    <div className="albumImage flex items-center justify-center xl:w-[70%] w-4/5 relative">
      <img src={url} alt="Album art" className="albumImage-art" />
      <div className="albumImage-shadow w-[90%] absolute">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}
