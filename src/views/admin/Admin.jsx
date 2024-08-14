import React, { useState } from 'react';
import ReactSearchBox from 'react-search-box';
import './Admin.css';
import useDebounce from '../../utils/useDebounce';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [inputSearch, setInputSearch] = useState();

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
  const dataMusic = [
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 2, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 3, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 4, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 5, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 6, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 7, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 8, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 9, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 10, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 11, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 12, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 13, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 14, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 15, name: 'chibao', author: 'author', url: 'chibao' },
  ];
  const inputSearchDebounce = useDebounce(inputSearch, 300);
  const navigate = useNavigate();

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
                <th className="w-[60%]">Song</th>
                <th className="w-[20%]">Artist</th>
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
                  <td className="w-[60%] text-center">{item.name}</td>
                  <td className="w-[20%] text-center">{item.author}</td>
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
