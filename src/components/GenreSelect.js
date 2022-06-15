import React from 'react';

const GenreSelect = ({genres, onGenreSelected}) => {

    const handleChange = (event) => {
        event.preventDefault();
        const newGenre = genres[event.target.value];
        console.log(newGenre);
        onGenreSelected(newGenre);
    }

    const genreItems = genres.map((genre, index) => {
        return <option value={index} key={index}>{genre.name}</option>
    })

  return (
    <div>
        <select id='select' onChange={handleChange}>
            <option disabled value="">Select a Genre</option>
            {genreItems}
        </select>
    </div>
  )
}

export default GenreSelect;