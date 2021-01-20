import React, {useState} from 'react';

function SpotifyLogged(props) {
    const [albums, setAlbums] = useState([]);

    function Playing() { 
        props.spotifyWebAPI.getMySavedAlbums()
        .then(res => {
          if(res) {
            const temp = res.items
            setAlbums(temp)
          } else {
            console.log('Error');
          }
        })
    }

    return (
        <div>
        {albums.map(album => {
          return (
            <div key={album.added_at}>
              <h1>{album.album.name}</h1>
              <img src={album.album.images[0].url} style={{width:100}}/>
            </div>
          )
        })}
        <button onClick={Playing}>Click</button>
       </div>
       )

}

export default SpotifyLogged;
