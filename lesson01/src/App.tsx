import React from 'react';

import './App.css';
import {
  SimpleButton,
  SimpleButtonProps,
} from './components/SimpleButton/SimpleButton';
import {
  DiverseButton,
  DiverseButtonProps,
} from './components/DiverseButton/DiverseButton';
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

  const actionButton: DiverseButtonProps = {
    type: 'action',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const actionButtonLoading: DiverseButtonProps = {
    type: 'action',
    buttonStatus: 'loading',
    buttonText: '',
    size: 'm',
  };

  const dangerButton: DiverseButtonProps = {
    type: 'danger',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const dangerButtonLoading: DiverseButtonProps = {
    type: 'danger',
    buttonStatus: 'loading',
    buttonText: '',
    size: 'm',
  };

  const outlinedButton: DiverseButtonProps = {
    type: 'outlined',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const actionButtonDisabled: DiverseButtonProps = {
    type: 'action',
    buttonStatus: 'disabled',
    buttonText: '',
    size: 'm',
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
    fontSize: '36px',
  };

  const questionAndAnswer: QuestionAndAnswerProps = {
    children: <SimpleButton buttonText="To be or not to be" />,
    tooltip: 'That is the question',
  };

  return (
    <div className="App">
      <p>Рождение кнопки</p>
      <SimpleButton {...simpleButton} />
      <p>Многоликий кнопкус</p>
      <div className="App-Buttons">
        <DiverseButton
          {...actionButton}
          buttonText={`${actionButton.type} ${actionButton.buttonStatus}`}
        />
        <DiverseButton
          {...actionButtonLoading}
          buttonText={`${actionButtonLoading.type} ${actionButtonLoading.buttonStatus}`}
        />
        <DiverseButton
          {...dangerButton}
          buttonText={`${dangerButton.type} ${dangerButton.buttonStatus}`}
        />
        <DiverseButton
          {...dangerButtonLoading}
          buttonText={`${dangerButtonLoading.type} ${dangerButtonLoading.buttonStatus}`}
        />
        <DiverseButton
          {...outlinedButton}
          buttonText={`${outlinedButton.type} ${outlinedButton.buttonStatus}`}
        />
        <DiverseButton
          {...actionButtonDisabled}
          buttonText={`${actionButtonDisabled.type} ${actionButtonDisabled.buttonStatus}`}
        />
      </div>
      <p>Айконка</p>
      <Icon {...icon} />
      <p>Поженим!</p>
      <IconButton {...iconButton} />
      <p>С подписью понятнее</p>
      <LabelWithIcon {...labelWithIcon} />
      <p>Подскажи это</p>
      <QuestionAndAnswer {...questionAndAnswer} />
    </div>
  );
}

export default App;
