import React from 'react';

export default function BaseImage({ src, className }) {
  return <img src={src} alt="profile" className="mt-5 w-14 h-14 rounded-3xl" />;
}
