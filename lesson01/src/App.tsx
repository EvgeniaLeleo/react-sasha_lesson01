import React from 'react';

import './App.css';
import {
  SimpleButton,
  SimpleButtonProps,
} from './components/SimpleButton/SimpleButton';
// import { DiverseButton } from './components/DiverseButton/DiverseButton';
import { Icon, IconProps } from './components/Icon/Icon';
import {
  IconButton,
  IconButtonProps,
} from './components/IconButton/IconButton';
import {
  LabelWithIcon,
  LabelWithIconProps,
} from './components/LabelWithIcon/LabelWithIcon';
import {
  QuestionAndAnswer,
  QuestionAndAnswerProps,
} from './components/QuestionAndAnswer/QuestionAndAnswer';

function App() {
  const simpleButton: SimpleButtonProps = {
    buttonText: 'My first button',
  };

  const icon: IconProps = {
    iconName: 'sloth',
    size: '150px',
  };

  const iconButton: IconButtonProps = {
    icon: 'bug',
    buttonText: 'Icon button',
  };

  const labelWithIcon: LabelWithIconProps = {
    icon: 'otter',
    iconSize: '40px',
    labelText: 'Label with icon',
    fontSize: '40px',
  };

  const questionAndAnswer: QuestionAndAnswerProps = {
    children: <SimpleButton {...simpleButton} />,
    tooltip: 'Истина где-то рядом',
  };

  return (
    <div className="App">
      <SimpleButton {...simpleButton} />
      {/* <DiverseButton buttonText="Diverse button" /> */}
      <Icon {...icon} />
      <IconButton {...iconButton} />
      <LabelWithIcon {...labelWithIcon} />
      <QuestionAndAnswer {...questionAndAnswer} />
    </div>
  );
}

export default App;
