import './App.css';
import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import configure from "./aws-exports";
import '@aws-amplify/ui-react/styles.css';
import { listSongs } from "./queries.ts";
import React, { useEffect, useState } from 'react';
import Album from './components/Album'

Amplify.configure(configure);

function App({ signOut, user }) {

  const [songPlaying, setSongPlaying] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = async () => {
    console.log('getting songs')
    try {
      const songData = await API.graphql(graphqlOperation(listSongs));
      setSongs(songData.data.listSongs.items)
    } catch (error) {
      console.error("error on get songs: ", error);
    }
  }

  const toggleSong = async index => {
    if (songPlaying === index) {
      setSongPlaying('')
      return
    }

  const song = songs[index];
  const filePath = song.filepath
  // console.log(songFilePath)
  try {
    const fileAccessURL = await Storage.get(filePath, {expires: 60})
    console.log(filePath, "this should work")
    setSongPlaying(index);
    setAudioURL(fileAccessURL);
    return;
  } catch (error) {
    console.error("could not acces song in s3:", error);
    setAudioURL("");
    setSongPlaying(""); 
  }
}

  return (
    <div className="App">
      <Album signOut={signOut} user={user} songs={songs} audioURL={audioURL} songPlaying={songPlaying}
        toggleSong={toggleSong} />
    </div>
  );
}

export default withAuthenticator(App);

