import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// wagmi
import {  configureChains, createClient, WagmiConfig, chain} from "wagmi";
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const { REACT_APP_WALLET_CONNECT_PROJECT_ID } = process.env;
const chains = [chain.mainnet];
const { provider } = configureChains(chains, [walletConnectProvider({ projectId: REACT_APP_WALLET_CONNECT_PROJECT_ID || "" })]);
const wagmiClient = createClient({
  autoConnect: false,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

root.render(
  <React.StrictMode>
    <App />
    <Web3Modal
        projectId={REACT_APP_WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
