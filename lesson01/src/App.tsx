import React from 'react';

import './App.css';
import {
  SimpleButton,
  SimpleButtonProps,
} from './components/SimpleButton/SimpleButton';
import { Button, ButtonProps } from './components/Button/Button';
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

  const actionButton: ButtonProps = {
    type: 'action',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const actionButtonLoading: ButtonProps = {
    type: 'action',
    buttonStatus: 'loading',
    buttonText: '',
    size: 'm',
  };

  const dangerButton: ButtonProps = {
    type: 'danger',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const dangerButtonLoading: ButtonProps = {
    type: 'danger',
    buttonStatus: 'loading',
    buttonText: '',
    size: 'm',
  };

  const outlinedButton: ButtonProps = {
    type: 'outlined',
    buttonStatus: 'normal',
    buttonText: '',
    size: 'm',
  };

  const actionButtonDisabled: ButtonProps = {
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
        <Button
          {...actionButton}
          buttonText={`${actionButton.type} ${actionButton.buttonStatus}`}
        />
        <Button
          {...actionButtonLoading}
          buttonText={`${actionButtonLoading.type} ${actionButtonLoading.buttonStatus}`}
        />
        <Button
          {...dangerButton}
          buttonText={`${dangerButton.type} ${dangerButton.buttonStatus}`}
        />
        <Button
          {...dangerButtonLoading}
          buttonText={`${dangerButtonLoading.type} ${dangerButtonLoading.buttonStatus}`}
        />
        <Button
          {...outlinedButton}
          buttonText={`${outlinedButton.type} ${outlinedButton.buttonStatus}`}
        />
        <Button
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
