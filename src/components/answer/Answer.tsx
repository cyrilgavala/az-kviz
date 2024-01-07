import { AnswerType } from "../../models/models";
import css from ".//Answer.module.css";
import { useState } from "react";
import cx from "classnames";

type Props = {
  answer: AnswerType;
  answered: boolean;
  onAnswerSubmit: VoidFunction;
};

export const Answer: React.FC<Props> = (props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const getStatus = (isAnswered: boolean, isCorrect: boolean): string => {
    if (isAnswered) {
      return isCorrect ? "correct" : "incorrect";
    }
    return "noAnswer";
  };

  return (
    <li
      className={cx(css.root, { [css.clicked]: clicked })}
      data-status={getStatus(props.answered, props.answer.isCorrect)}
      onClick={() => {
        setClicked(true);
        props.onAnswerSubmit();
      }}
    >
      {props.answer.title}
    </li>
  );
};
