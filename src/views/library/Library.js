import React, { useEffect, useState } from 'react';
import './Library.css';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { example4,example5,example6 } from '../../style/image';
export default function Library() {
  const listMusc = [
    {
      id: 1,
      image: example4,
      name: 'Một triêu like',
      total: 3,
    },
    {
      id: 2,
      image: example5,
      name: 'Một triêu like',
      total: 3,
    },
    {
      id: 3,
      image: example6,
      name: 'Một triêu like',
      total: 3,
    }
  ]

  const navigate = useNavigate();
  const playMusic = (id) => {
    navigate('/player', { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body overflow-y-auto grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-[3%] w-full">
        {listMusc?.map((item) => (
          <div
            className="playlist-card relative border-white bg-primaryBorder rounded-[20px] border w-[75%]"
            key={item.id}
            onClick={() => playMusic(item.id)}
          >
            <img src={item.image} className="playlist-image " alt="Playlist-Art" />
            <span className="playlist-title text-base line-clamp-2 text-[#c4d0e37c] text-ellipsis font-extrabold">
              {item.name}
            </span>
            <span className="playlist-subtitle text-sm text-[#c4d0e37c]">{item.total} Songs</span>
            <div className="playlist-fade absolute bottom-0 right-0 opacity-0">
              <IconContext.Provider value={{ size: '50px', color: '#E99D72' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
