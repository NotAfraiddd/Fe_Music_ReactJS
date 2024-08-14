import React from 'react';
import './Queue.css';

export default function Queue({ tracks, setCurrrentTrack, currrentIndex }) {
  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <div className="h-[35%] flex flex-col justify-center items-center opacity-100 w-full queue-container rounded-[30px] rounded-tr-none bg-[#3e61d2]">
      <div className="queue flex h-[85%] font-weight flex-col justify-between">
        <span className="update-next text-xl text-white">Up next</span>
        <div className="queue-list h-4/5 overflow-y-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              onClick={() => setCurrrentTrack(index)}
              className="queue-item cursor-pointer flex justify-between w-full px-1 text-sm text-white gap-2"
            >
              {currrentIndex === index ? (
                <>
                  <i className="track-name text-ellipsis w-[75%] text-base">{track?.name}</i>
                  <i className="text-base">{formatDuration(track?.duration)}</i>
                </>
              ) : (
                <>
                  <p className="track-name text-ellipsis w-[75%]">{track?.name}</p>
                  <p>{formatDuration(track?.duration)}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
