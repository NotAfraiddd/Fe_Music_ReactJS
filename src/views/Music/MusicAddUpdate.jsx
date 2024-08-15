import React, { useEffect, useState } from 'react';
import './MusicAddUpdate.css';
import { FilePond, File, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import InputAudio from '../../components/InputAudio';
import { useNavigate } from 'react-router-dom';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function MusicAddUpdate() {
  const [files, setFiles] = useState([]);
  const [audioSrc, setAudioSrc] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [today, setToday] = useState('');
  const [name, setName] = useState('');
  const [singer, setSinger] = useState('');
  const [category, setCatogery] = useState('');
  const [album, setAblum] = useState('');
  const [duration, setDuration] = useState('');

  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    const currentTime = new Date().toISOString().split('T')[0];
    setToday(currentTime);
  }, []);

  /**
   * handle set/get file mp3
   * @param {*} value
   */
  const handleValueAudio = (value) => {
    setAudioSrc(value);

    const audio = new Audio(value);

    audio.addEventListener('loadedmetadata', () => {
      const duration = audio.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      setDuration(formattedDuration);
    });
  };

  /**
   * handle submit update or create
   * @param {*} event
   * @returns
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !singer || !category || !audioSrc) {
      return;
    }
  };

  /**
   * go to list music
   */
  const navigateListMusic = () => {
    navigate('/admin/musics');
  };
  return (
    <form className="screen-container p-10" onSubmit={handleSubmit}>
      <div className="flex items-center gap-10 flex-wrap">
        <div className="flex flex-col">
          <span className="text-white">
            Name of music <span className="text-red-500">( * )</span>
          </span>
          <input
            type="text"
            className="focus-within:outline-none px-2 py-1"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white">
            Singer <span className="text-red-500">( * )</span>
          </span>
          <input
            type="text"
            className="focus-within:outline-none px-2 py-1"
            onChange={(e) => setSinger(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white">
            Category <span className="text-red-500">( * )</span>
          </span>
          <input
            type="text"
            className="focus-within:outline-none px-2 py-1"
            onChange={(e) => setCatogery(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <span className="text-white">Image Background</span>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={1}
          server={{
            process: 'http://localhost:4000/api/image/upload',
            revert: 'http://localhost:4000/api/image/revert',
            load: 'http://localhost:4000/api/image/load',
          }}
          name="files"
          acceptedFileTypes={['image/jpeg', 'image/png', 'image/gif']}
          labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <div className="mt-10 flex items-start flex-wrap gap-10">
        <div className="flex flex-col ">
          <span className="text-white">Album</span>
          <input
            type="text"
            className="focus-within:outline-none px-2 py-1"
            onChange={(e) => setAblum(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-white">Release year</span>
          <input
            type="date"
            className="focus-within:outline-none px-2 py-1"
            value={releaseYear || today}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 flex items-start flex-wrap gap-10">
        <div className="flex flex-col w-1/2">
          <span className="text-white">
            File music <span className="text-red-500">( * )</span>
          </span>
          <FilePond
            files={audioSrc}
            onupdatefiles={handleValueAudio}
            allowMultiple={true}
            maxFiles={1}
            server={{
              process: 'http://localhost:4000/api/audio/upload',
              revert: 'http://localhost:4000/api/audio/revert',
              load: 'http://localhost:4000/api/audio/load',
            }}
            name="audios"
            acceptedFileTypes={['audio/mp3']}
            labelIdle='Drag & Drop your audio or <span class="filepond--label-action">Browse</span>'
            required={true}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <span className="text-white">Duration</span>
          <input type="text" className="focus-within:outline-none px-2 py-1" value={duration} disabled />
        </div>
      </div>
      <div className="text-right mt-40">
        <span className=" bg-yellow-500 text-white py-3 px-6 rounded mr-10 cursor-pointer" onClick={navigateListMusic}>
          Back
        </span>
        <button type="submit" className=" bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
}
