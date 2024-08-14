import React from 'react';
import { loginEndpoint } from '../../apis/spotify';

export default function Login() {
  return (
    <div className="login-page bg-[#121212] w-[100vw] h-[100vh] flex flex-col justify-center items-center overflow-hidden">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo w-[30%]"
      />
      <a href={loginEndpoint}>
        <div className="inline-flex justify-center items-center w-[200px] rounded-2xl h-12 bg-[#1ED760] text-[#121212] mt-[20%] text-center">
          <span className="mt-1 font-semibold">Log In</span>
        </div>
      </a>
    </div>
  );
}
