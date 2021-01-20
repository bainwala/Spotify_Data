import React, {useState} from 'react';
import './Spotify.css'
const https = require('https');

function Spotify () {
    return (
        <div className="main">
            <a href="http://localhost:8888">
                <button className="btn">Log In Spotify</button>
            </a>
        </div>
    )
}

export default Spotify;