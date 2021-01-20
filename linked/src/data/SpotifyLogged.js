import React, {useState} from 'react';

function SpotifyLogged(props) {
    const [nowPlaying, setNowPlaying] = useState({name: 'Not Checked', image: ''});

    function Playing() { 
        props.spotifyWebAPI.getMyCurrentPlaybackState()
        .then(res => {
          if(res) {
            setNowPlaying({name:res.item.name, image: res.item.album.images[0].url})
          } else {
            setNowPlaying({name:'Nothing Is Playing', image: ''})
          }
        })
    }

    return (
        <div>
          <div>Now Playing: {nowPlaying.name}</div>
          <div>
            <img src={nowPlaying.image} style={{width:100}}/>
          </div>
          <button onClick = {Playing}>Check Now Playing</button>
       </div>
       )

}

export default SpotifyLogged;
