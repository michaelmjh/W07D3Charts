import React, {useState, useEffect} from 'react';
import GenreSelect from '../components/GenreSelect';
import Heading from '../components/Heading';
import List from '../components/List';

const Container = () => {
  const [songs, setSongs] = useState([]);

  const [genres, setGenres] = useState([
    {
      name: "all",
      url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    },
    {
      name: "rock",
      url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
    },
    {
      name: "dance",
      url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
    },
    {
      name: "country",
      url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
    }
  ]);

  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  
  useEffect(() => {
    console.log("useEffect: " + currentGenre.name)
    getSongs(currentGenre);
  }, [])

  const onGenreSelected = (newGenre) => {
    console.log("genreSelected1: " + currentGenre.name)
    setCurrentGenre(newGenre);
    console.log("genreSelected2: " + currentGenre.name)
    getSongs(currentGenre);
  }

  const getSongs = function(genre){
    fetch(genre.url)
    .then(res => res.json())
    .then(songs => setSongs(songs.feed.entry))
  }

  return (
    <div className="Container">
      <GenreSelect genres={genres} onGenreSelected={onGenreSelected}/>
      <hr></hr>
      <Heading currentGenre={currentGenre}/>
      <List songs={songs}/>
      
    </div>
  );
}

export default Container;