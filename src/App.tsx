import React from 'react';
import { IonButton } from "@ionic/react";
import './App.css';

// Web3Modal
import { useWeb3Modal } from "@web3modal/react";

function App() {
  const { open: web3ModalOpen } = useWeb3Modal();
  return (
    <div className="App">
     <IonButton  onClick={() => web3ModalOpen()}>
        Connect Wallet
      </IonButton>
    </div>
  );
}

export default App;
