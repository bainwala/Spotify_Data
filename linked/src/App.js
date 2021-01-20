
import { useState, useEffect } from 'react';
import Spottify from './data/Spotify';
import SpotifyLogged from './data/SpotifyLogged';
import React from 'react';
import Spotify from 'spotify-web-api-js';

function App() {

  const spotifyWebAPI = new Spotify();
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

   function Content() {
     if(!logged) {
       return <Spottify/>
     } else {
       return <SpotifyLogged spotifyWebAPI={spotifyWebAPI}/>
     }

   }

  return (
    <Content/>
  );
}

export default App;
