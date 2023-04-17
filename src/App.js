import './App.css';
import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import configure from "./aws-exports";
import '@aws-amplify/ui-react/styles.css';
// import { listSongs } from "./graphql/queries";
// import { updateSong } from "./graphql/mutations";
import React, { useEffect, useState } from 'react';

Amplify.configure(configure);

function App({signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default withAuthenticator(App);

