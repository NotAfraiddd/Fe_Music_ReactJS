import React, { useEffect, useRef, useState } from 'react';
import './AudioPlayer.css';
import ProcessCircle from './ProcessCircle';
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';

export default function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(total[currentIndex]?.url));

  const intervalRef = useRef();
  const isReady = useRef(false);

  const currentPercentage = audioRef.current.duration ? (trackProgress / audioRef.current.duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(total[currentIndex]?.url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < total.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : total.length - 1));
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="player-body flex w-full h-2/5 my-[3%]">
      <div className="player-body__left w-2/5">
        <ProcessCircle
          percentage={currentPercentage}
          isPlaying={isPlaying}
          image={currentTrack?.album[currentIndex]?.image}
          size={300}
          color="#34fede"
        />
      </div>
      <div className="player-body__right flex justify-around items-center flex-col w-3/5">
        <p className="song-title text-center text-[58px] font-bold text-[#c4d0e3] overflow-hidden text-ellipsis line-clamp-2">
          {currentTrack?.album[currentIndex]?.name}
        </p>
        <div className="player-body__right-bottom flex flex-col items-center w-full">
          <div className="song-duration w-1/2 flex justify-between items-center mb-5">
            <p className="duration text-xl font-bold text-[#c4d0e3]">{formatDuration(trackProgress)}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration text-xl font-bold text-[#c4d0e3]">{formatDuration(audioRef.current.duration)}</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
