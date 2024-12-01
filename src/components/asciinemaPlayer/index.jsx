import React, { useEffect, useRef } from 'react';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { create } from 'asciinema-player';

const AsciinemaPlayer = ({ src }) => {
  const playerRef = useRef();

  const options = {
    autoplay: true,
    loop: true,
    theme: 'solarized-dark',
  };

  useEffect(() => {
    if (playerRef.current) {
      create(src, playerRef.current, options);
    }
  }, [src]);

  return <div ref={playerRef} />;
};

export default AsciinemaPlayer;
