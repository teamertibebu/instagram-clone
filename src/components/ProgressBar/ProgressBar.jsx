import React, { useEffect } from 'react';
import useStorage from '../HelperFunctions/useStorage';

const ProgressBar = ({ file, setFile, setImageURL }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setImageURL(url);
    }
  }, [url, setFile, setImageURL]);

  setImageURL(url);

  return (
    <div
      className="progress-bar"
      style={{
        width: progress + '%',
        height: '5px',
        backgroundColor: 'pink',
        marginTop: '20px',
      }}
    />
  );
};

export default ProgressBar;
