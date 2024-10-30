// src/App.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './authConfig';
import MainApp from './MainApp';

function App() {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      redirectUri={authConfig.redirectUri}
    >
      <MainApp />
    </Auth0Provider>
  );
}

export default App;
