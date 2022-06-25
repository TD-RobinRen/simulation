import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AtlasSdk from '@atlas/sdk';
import TokenGenerator from './config/token.generator';
import HttpClient from './config/http.client';

async function startApp() {
  AtlasSdk.lifecycle.onLaunch(async () => {
  
    const { apiGatewayUrl } = await AtlasSdk.environment.getConfig();
    HttpClient.initialize(apiGatewayUrl)
  
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  });

  // ReactDOM.render(
  //   <App />,
  //   document.getElementById('root')
  // );

  TokenGenerator.initialize(
    () => AtlasSdk.authorization.getAccessToken()
  );

  await AtlasSdk.connect();
}

startApp().catch(console.error);
