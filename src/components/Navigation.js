import React from 'react';

function Navigation() {
  return (
    <nav className="heylyn-app__navbar">
      <ul>
        <li>
          <h2>
            <a className="active" href="#">All Music</a>
            <hr />
          </h2>
        </li>
        <li>
          <h2>
            <a href="#">Favorite</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#">Playlist</a>
          </h2>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
