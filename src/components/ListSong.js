import React from 'react';
import SongItem from './SongItem';

function ListSong({ allSong }) {
  return (
    <div className="heylyn-app__list-song">
      <ul>
        {
          allSong.map((song) => <SongItem key={song.id} {...song} />)
        }
      </ul>
    </div>
  );
}

export default ListSong;
