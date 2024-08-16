import React, { useEffect, useState } from 'react';
import ReactSearchBox from 'react-search-box';
import './Admin.css';
import useDebounce from '../../utils/useDebounce';
import { useNavigate } from 'react-router-dom';
import { getListTracks } from '../../apis/track';
import moment from 'moment';

export default function Admin() {
  const [inputSearch, setInputSearch] = useState();
  const [dataMusic, setDataMusic] = useState([]);

  const data = [
    {
      key: 'he',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ];
  const inputSearchDebounce = useDebounce(inputSearch, 300);
  const navigate = useNavigate();

  /**
   * get list track
   */
  const getListAllTracks = async () => {
    try {
      const res = await getListTracks();
      if (res) {
        const listTracks = res.map((item) => ({
          id: item?.id,
          name: item?.title,
          author: item?.singer,
          ablum: item?.ablum,
          release_year: item?.release_year ? moment(item?.release_year).format('DD/MM/YYYY') : "",

        }));

        setDataMusic(listTracks);
      }
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  useEffect(() => {
    getListAllTracks();
  }, []);

  /**
   * go to detail music
   * @param {*} id
   */
  const handleNavigateDetail = (data) => {
    navigate(`/admin/music/${data.id}`, { state: { id: data.id } });
  };

  /**
   * go to create music
   */
  const handleNavigateCreateMusic = () => {
    navigate(`/admin/music/add`);
  };

  return (
    <div className="screen-container pt-10">
      <div className="mx-auto flex justify-center">
        <ReactSearchBox
          placeholder="Search something"
          value="Doe"
          data={data}
          onChange={(record) => setInputSearch(record)}
        />
      </div>
      <div
        className="mt-10 w-fit px-3 py-1 ml-10 bg-blue-400 text-white rounded-lg cursor-pointer"
        onClick={handleNavigateCreateMusic}
      >
        Create
      </div>
      <div className="flex gap-3 justify-around mt-10">
        <div className="w-full h-[600px] bg-slate-800 overflow-y-scroll mx-10">
          <table className="table-auto w-full">
            <thead className="sticky top-0 h-12 text-white bg-slate-600">
              <tr className="h-12">
                <th className="w-[10%]">#</th>
                <th className="w-[30%]">Song</th>
                <th className="w-[20%]">Singer</th>
                <th className="w-[20%]">Album</th>
                <th className="w-[20%]">Release Year</th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {dataMusic.map((item, index) => (
                <tr
                  key={index}
                  className={`h-12 mt-2  hover:bg-slate-500 hover:text-[#38bdf8] cursor-pointer text-slate-300`}
                  onClick={() => handleNavigateDetail(item)} // using callback when having argument
                >
                  <td className="w-[10%] text-center">{item.id}</td>
                  <td className="w-[30%] text-center">{item.name}</td>
                  <td className="w-[20%] text-center">{item.author}</td>
                  <td className="w-[20%] text-center">{item.ablum}</td>
                  <td className="w-[20%] text-center">{item.release_year}</td>
                  <td className="w-[10%] text-center">
                    <a href={item.url}></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
