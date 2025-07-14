import React from 'react';
import { showImagePreviewer } from '@/page/components/PreviewImgJs';

const imageUrls = [
  './GIF.gif',
  'globe.svg',
  'image.png',
];

export default function ImageList() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`img-${index}`}
          style={{ width: 150, height: 100, cursor: 'pointer', objectFit: 'cover' }}
          onClick={() => showImagePreviewer(imageUrls)}
        />
      ))}
    </div>
  );
}
