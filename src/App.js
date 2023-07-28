import React from 'react';
import Navigation from './components/Navigation';
import ListSong from './components/ListSong';
import ButtomNavigation from './components/ButtomNavigation';
import { allSong } from './utils/dataSong';

function App() {
  return (
    <>
      <header>
        <div className="heylyn-app__logo">
          <h1>Heylyn</h1>
        </div>
        <Navigation />
      </header>
      <main>
        <ListSong allSong={allSong} />
      </main>
      <footer>
        <ButtomNavigation />
      </footer>
    </>
  );
}

export default App;
