import React, { useEffect, useState } from 'react';
import './Library.css';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { cancel, pencil } from '../../style/image';
import { getListTracksByUserID } from '../../apis/playlist';
import { admin } from '../../constant';

export default function Library() {
  const navigate = useNavigate();
  const [listMusic, setListMusc] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');

  /**
   * get list of user
   * @param {*} user_id 
   */
  const getListTracks = async (user_id) => {
    try {
      const res = await getListTracksByUserID(user_id);
      if (res) {
        const newMusicList = res.playlists.map((item) => ({
          id: item?._id,
          image: item?.playlist_tracks[0].track.cover_image,
          name: item?.name,
          total: item?.playlist_tracks.length,
        }));
        setListMusc(newMusicList);
      }
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  }

  useEffect(() => {
      getListTracks(admin.id);
  }, []);


  /**
   * navigate player
   * @param {*} id
   */
  const playMusic = (id) => {
    navigate('/player', { state: { id: id } });
  };

  /**
   * handle update name of list
   * @param {*} id 
   * @param {*} event 
   */
  const handleEditNameFavoriteMusic = (id, event) => {
    event.stopPropagation();
    if (editId === id) {
      setEditId(null);
    } else {
      setEditId(id);
      setName(listMusic.find((item) => item.id === id).name);
    }
  };

  /**
   * get value input name change
   * @param {*} event
   */
  const handleInputNameChange = (event) => {
    setName(event.target.value);
  };

  /**
   * handle update
   * @param {*} event
   */
  const handleUpdate = (id, event) => {
    event.stopPropagation();
    // Update the name in the list
    console.log(name, editId);

    setListMusc((prevList) => prevList.map((item) => (item.id === id ? { ...item, name } : item)));
    setEditId(null);
  };

  return (
    <div className="screen-container">
      <div className="library-body overflow-y-auto grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-[3%] w-full">
        {listMusic?.map((item) => (
          <div
            className="playlist-card relative border-white bg-primaryBorder rounded-[20px] border w-[75%]"
            key={item.id}
            onClick={() => playMusic(item.id)}
          >
            <img src={item.image} className="playlist-image" alt="Playlist-Art" />
            <div className="flex items-center gap-2">
              {editId === item.id ? (
                <input
                  type="text"
                  className="focus-within:outline-none w-[100px] playlist-title"
                  value={name}
                  onChange={handleInputNameChange}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <span className="playlist-title text-base line-clamp-2 text-[#c4d0e37c] text-ellipsis font-extrabold">
                  {item.name}
                </span>
              )}
              <img
                src={editId === item.id ? cancel : pencil}
                alt=""
                className="w-5 h-5 cursor-pointer"
                onClick={(e) => handleEditNameFavoriteMusic(item.id, e)}
              />
            </div>
            <span className="playlist-subtitle text-sm text-[#c4d0e37c]">{item.total} Songs</span>
            {editId === item.id && (
              <span
                className="bg-blue-500 text-white px-3 py-1 rounded-xl ml-4"
                onClick={(e) => handleUpdate(item.id, e)}
              >
                Update
              </span>
            )}
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
