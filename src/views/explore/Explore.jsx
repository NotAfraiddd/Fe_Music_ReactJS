import React, { useState } from 'react';
import { example3, example4, example5, example6 } from '../../style/image';
import BaseSlider from '../../components/slider/slider';
import ReactSearchBox from 'react-search-box';
import './Explore.css';
import useDebounce from '../../utils/useDebounce';

export default function Explore() {
  const [inputSearch, setInputSearch] = useState();

  const dataMusic = [
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
    { id: 1, name: 'chibao', author: 'author', url: 'chibao' },
  ];
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

  const dataImages = [
    {
      imgURL: example6,
      imgAlt: 'img-1',
    },
    {
      imgURL: example4,
      imgAlt: 'img-3',
    },
    {
      imgURL: example5,
      imgAlt: 'img-4',
    },
  ];

  const inputSearchDebounce = useDebounce(inputSearch, 300);

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
      <div className="flex gap-3 justify-around mt-10">
        <div className="w-[500px] flex ml-10">
          <BaseSlider>
            {dataImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </BaseSlider>
        </div>
        <div className="flex flex-col gap-3">
          <span>Recommended Music List</span>
          <div className="overflow-hidden w-[500px] h-[450px] overflow-y-auto border-white border-2 no-scrollbar">
            {dataMusic.map((item, index) => (
              <div
                key={index}
                className={`mt-2 flex items-center text-white hover:bg-slate-500 hover:text-[#38bdf8] cursor-pointer my-5`}
              >
                <div className="w-[20%] text-center">
                  <img src={example3} alt="" className="w-10 h-10 mx-auto" />
                </div>
                <div className="w-[80%] text-left">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
