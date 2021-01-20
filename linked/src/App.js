
import { useState, useEffect } from 'react';
import Spottify from './data/Spotify';
import React from 'react';
import Spotify from 'spotify-web-api-js';

function App() {

  const spotifyWebAPI = new Spotify();
  const [nowPlaying, setNowPlaying] = useState({name: 'Not Checked', image: ''});
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const params = getHashParams();
    console.log(spotifyWebAPI)
    if(params.access_token) {
      setLogged(true);
      spotifyWebAPI.setAccessToken(params.access_token);
    }
  },[])
  

  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  function Playing() { 
    spotifyWebAPI.getMyCurrentPlaybackState()
    .then(res => {
      if(res) {
        setNowPlaying({name:res.item.name, image: res.item.album.images[0].url})
      } else {
        setNowPlaying({name:'Nothing Is Playing', image: ''})
      }
    })
   }

   function Content() {
     if(!logged) {
       return <Spottify/>
     } else {
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

   }

  return (
    <Content/>
  );
}

export default App;
