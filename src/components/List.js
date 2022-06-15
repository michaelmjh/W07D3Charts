import React from 'react';
import ListItem from './ListItem';

const List = ({songs}) => {
    const songsNodes = songs.map((song, index) => {
        return (
            <ListItem key={index} song={song}/>
        )
    })
    
    return (
        <div className="List">
            <ol> 
                {songsNodes}
            </ol>
        </div>
    );
}

export default List;