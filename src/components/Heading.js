import React from 'react';
import List from './List';

const Heading = ({currentGenre}) => {
    

    return (
        <div className="Heading">
            <h1>Top 20 - {currentGenre.name.toUpperCase()}</h1>
        </div>
    );
}

export default Heading;