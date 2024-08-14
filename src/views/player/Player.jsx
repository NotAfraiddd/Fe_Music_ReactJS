import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import Queue from '../../components/queue/Queue';
import AudioPlayer from '../../components/audio/AudioPlayer';
import { example, example2, example3, example4, example5, example6 } from '../../style/image';

export default function Player() {
  const location = useLocation();
  const intialAblumMusic = [
    {
      id: 1,
      image: example4,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 2,
      image: example5,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 3,
      image: example,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 4,
      image: example2,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 5,
      image: example3,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 6,
      image: example6,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 7,
      image: example2,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 8,
      image: example3,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 9,
      image: example5,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 10,
      image: example4,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 11,
      image: example2,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
    {
      id: 12,
      image: example6,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
      duration: 184,
      name: 'huhu',
    },
    {
      id: 13,
      image: example3,
      releaseYear: 2012,
      type: 'Rock',
      total_tracks: 12,
      url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_A_phone_call_from_a_customer.mp3',
      duration: 146,
      name: 'haha',
    },
  ];
  const [tracks, setTracks] = useState(intialAblumMusic);

  const currentTrack = {
    id: 1,
    image: example4,
    album: intialAblumMusic,
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
        <Queue currrentIndex={currrentIndex} tracks={tracks} setCurrrentTrack={setCurrrentIndex} />
      </div>
    </div>
  );
}
