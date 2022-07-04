import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './QuestionAndAnswer.css';

const cnQuestionAndAnswer = cn('QuestionAndAnswer');

export type QuestionAndAnswerProps = {
  children?: JSX.Element;
};

export const QuestionAndAnswer: FC<QuestionAndAnswerProps> = ({ children }) => {
  if (!children) {
    return (
      <span className={cnQuestionAndAnswer('QuestionMark')}>
        Нет вопросов - нет и ответов!
      </span>
    );
  }

  return (
    <div className={cnQuestionAndAnswer()}>
      {children}
      <span
        className={cnQuestionAndAnswer('QuestionMark')}
        title="Истина где-то рядом"
      >
        ?
      </span>
    </div>
  );
};
