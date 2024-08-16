import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import Queue from '../../components/queue/Queue';
import AudioPlayer from '../../components/audio/AudioPlayer';
import { getListTracksByPlaylistID } from '../../apis/playlist';
import { example4 } from '../../style/image';

export default function Player() {
  const location = useLocation();
  const [intialAblumMusic, setIntialAblumMusic] = useState([]);
  const [tracks, setTracks] = useState([]);

  const [currrentIndex, setCurrrentIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState();

  /**
   * get list of user
   * @param {*} user_id 
   */
    const getListTracks = async (playlist_id) => {
      try {
        const res = await getListTracksByPlaylistID(playlist_id);
        if (res) {
          const newMusicList = res.tracks.map((item) => ({
            id: item?._id,
            image: item?.cover_image,
            releaseYear: item?.release_year,
            type: item?.category,
            total_tracks: 1, // set temp
            url: item?.mp3_file,
            duration: 20,  // set temp
            name: item?.name
          }));
          newMusicList.unshift(    {
            id: 1,
            image: example4,
            releaseYear: 2012,
            type: 'Rock',
            total_tracks: 12,
            url: 'https://6a63fca904fd268f15f7-d5770ffdd579eb31eaa89faeffc55fe7.ssl.cf1.rackcdn.com/LE_listening_B1_Student_discussion.mp3',
            duration: 184,
            name: 'How long',
          },)
          if (newMusicList) {
            setTracks(newMusicList);          
            setIntialAblumMusic(newMusicList);
          }
          

        }
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
  }
  
  useEffect(() => {
    if (intialAblumMusic.length >0) {
      setCurrentTrack({
        id: intialAblumMusic[currrentIndex].id,
        image: intialAblumMusic[currrentIndex].image,
        album: intialAblumMusic,
      });
      
    }

  },[currrentIndex, intialAblumMusic])
  
    useEffect(() => {
      getListTracks(2);
    }, []);


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
