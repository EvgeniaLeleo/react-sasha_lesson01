import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './SimpleButton.css';

const cnSimpleButton = cn('SimpleButton');

type SimpleButtonProps = { buttonText?: string };

export const SimpleButton: FC<SimpleButtonProps> = ({ buttonText }) => {
  return (
    <div className={cnSimpleButton()}>
      {buttonText ? (
        <button className={cnSimpleButton('Button')}>
          {buttonText.toUpperCase()}
        </button>
      ) : (
        <button className={cnSimpleButton('Button')}>
          {'Unnamed button'.toUpperCase()}
        </button>
      )}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
};
