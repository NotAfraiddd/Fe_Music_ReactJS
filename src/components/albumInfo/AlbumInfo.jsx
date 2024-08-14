import React from 'react';
import './AlbumInfo.css';
export default function AlbumInfo({ album }) {
  return (
    <div className="albumInfo-card xl:w-[70%] mt-[25px] text-[#c3d0e3] bg-[#27354d] rounded-[30px] rounded-br-none">
      <div className="album-name w-full overflow-hidden text-xl font-bold">
        <div className="marquee">
          <p>{album?.name}</p>
        </div>
      </div>
      <div className="album-info text-sm mt-2">
        <p>{`${album?.name} is an ${album?.type} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release text-xs mt-2">
        <p>Release Date: {album?.releaseYear}</p>
      </div>
    </div>
  );
}
