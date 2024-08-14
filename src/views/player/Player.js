import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import Queue from '../../components/queue/Queue';
import AudioPlayer from '../../components/audio/AudioPlayer';
import { example4, example5 } from '../../style/image';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([
    {
      id: 1,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 2,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
  ]);
  const currentTrack = {
    id: 1,
    image: example4,
    album: [
      { id: 1, image: example4, name: 'huhu', releaseYear: 2012, type: 'Rock', total_tracks: 12 },
      { id: 2, image: example5, name: 'haha', releaseYear: 2020, type: 'Rock', total_tracks: 12 },
    ],
  };
  const [currrentIndex, setCurrrentIndex] = useState(0);

  return (
    <div className="screen-container flex">
      <div className="left-player-body w-[70%] mr-[2%]">
        <AudioPlayer
          currentTrack={currentTrack}
          currentIndex={currrentIndex}
          setCurrentIndex={setCurrrentIndex}
          total={tracks}
        />
      </div>
      <div className="right-player-body w-[30%] flex flex-col justify-between">
        <SongCard album={currentTrack?.album[currrentIndex]} />
        <Queue tracks={tracks} setCurrrentTrack={setCurrrentIndex} />
      </div>
    </div>
  );
}
