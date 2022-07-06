import React, { ReactNode } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './QuestionAndAnswer.css';

const cnQuestionAndAnswer = cn('QuestionAndAnswer');

export type QuestionAndAnswerProps = {
  children?: ReactNode;
  tooltip: string;
};

export const QuestionAndAnswer: FC<QuestionAndAnswerProps> = ({
  children,
  tooltip,
}) => {
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
      <span className={cnQuestionAndAnswer('QuestionMark')} title={tooltip}>
        ?
      </span>
    </div>
  );
};
