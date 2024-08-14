import React, { useRef, useState, useEffect } from 'react';

export default function InputAudio({ dataProp, hideChoose, onValueAudio, required }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState(dataProp);
  const audioRef = useRef(null);

  useEffect(() => {
    setData(dataProp);
  }, [dataProp]);

  const selectAudio = (event) => {
    const file = event.target.files[0];
    if (file) {
      setData(URL.createObjectURL(file));
      onValueAudio(URL.createObjectURL(file));
    }
  };

  const handlePlay = () => {
    const audioElement = audioRef.current;
    setIsPlaying(true);
    audioElement.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    const audioElement = audioRef.current;
    audioElement.pause();
  };

  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      <audio ref={audioRef} controls onPlay={handlePlay} onPause={handlePause} src={data} className="w-full" />
      {hideChoose && (
        <input
          type="file"
          id="audioInput"
          onChange={selectAudio}
          accept=".mp3"
          className="max-w-max"
          required={required}
        />
      )}
    </div>
  );
}
