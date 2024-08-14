import React from 'react';
import AlbumImage from './albumImage/AlbumImage';
import AlbumInfo from './albumInfo/AlbumInfo';

export default function SongCard({ album }) {
  return (
    <div className="w-full flex flex-col h-3/5 justify-center items-center bg-[#27354d] rounded-[30px] rounded-br-none">
      <AlbumImage url={album?.image} />
      <AlbumInfo album={album} />
    </div>
  );
}
