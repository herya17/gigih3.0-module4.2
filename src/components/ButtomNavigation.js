import React from 'react';
import { MdFavorite } from 'react-icons/md';

function ButtomNavigation() {
  return (
    <div className="heylyn-app__played">
      <div>
        <img data-src="./images/skeleton/placeholder.webp" src="./images/song-icons/heyca.webp" alt="" />
      </div>
      <div className="heylyn-app__title-song">
        <h3>Lover</h3>
        <p>Taylor Swift</p>
      </div>
      <button>
        <MdFavorite className="play-btn-favorite" />
      </button>
      <button>
        <span className="material-symbols-rounded play">
          play_arrow
        </span>
      </button>
    </div>
  );
}

export default ButtomNavigation;
