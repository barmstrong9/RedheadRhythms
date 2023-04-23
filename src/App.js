import './App.css';
import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import configure from "./aws-exports";
import '@aws-amplify/ui-react/styles.css';
import { listSongs } from "./queries.ts";
// import { updateSong } from "./graphql/mutations";
import React, { useEffect, useState } from 'react';

Amplify.configure(configure);

function App({signOut, user}) {
const [songs, setSongs] = useState([]);
const getSongs = async () => {
  try {
    const songData = await API.graphql(graphqlOperation(listSongs));
    setSongs(songData.data.listSongs.items)
  } catch (error){
    console.error("error on get songs: ", error);
  }
}
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default withAuthenticator(App);

