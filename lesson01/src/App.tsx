import React from 'react';

import './App.css';
import {
  SimpleButton,
  SimpleButtonProps,
} from './components/SimpleButton/SimpleButton';
// import { DiverseButton } from './components/DiverseButton/DiverseButton';
import { IkonKa, IkonKaProps } from './components/IconKa/IconKa';

function App() {
  const simpleButton: SimpleButtonProps = {
    buttonText: 'My first button',
  };

  const icon: IkonKaProps = {
    name: 'sloth',
    size: '150px',
  };

  return (
    <div className="App">
      <SimpleButton {...simpleButton} />
      {/* <DiverseButton buttonText="Diverse button" /> */}
      <IkonKa {...icon} />
    </div>
  );
}

export default App;
