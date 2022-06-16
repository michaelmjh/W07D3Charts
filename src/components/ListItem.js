import React from 'react';
import '../App.css';

const ListItem = ({song}) => {
    
    console.log()
    return (
        <div className="ListItem">
            <li>
                <img id="cover" src={song["im:image"][2].label} alt={song["im:name"].label} />
                <div id="songinfo">
                    <p>Title: {song["im:name"].label}</p>
                    <p>Artist: {song["im:artist"].label}</p>
                    <audio 
                        controls 
                        src={song["link"][1].attributes.href}>
                    </audio>
                </div>
                
            </li>
        </div>
    );
}

export default ListItem;