import { AnswerType, QuestionType } from "../../models/models";
import css from "./Question.module.css";
import { Answer } from "../answer/Answer";
import { useContext, useMemo, useState } from "react";
import { useTimer } from "react-timer-hook";
import { PlayerContext } from "../../context/PlayerContext";

type Props = {
  question: QuestionType;
  onAnswerSubmitted: (answer?: AnswerType) => void;
};

export const Question: React.FC<Props> = (props) => {
  const [answered, setAnswered] = useState<boolean>(false);

  const context = useContext(PlayerContext);

  const time = new Date();
  time.setSeconds(time.getSeconds() + props.question.time);

  const timer = useTimer({
    expiryTimestamp: new Date(time),
    onExpire: () => {
      setAnswered(true);
      props.onAnswerSubmitted(undefined);
      context.switchPlayer();
    },
  });

  const shuffledAnswers = useMemo(
    () => props.question.answers.sort(() => (Math.random() > 0.5 ? 1 : -1)),
    [props.question.answers],
  );

  console.log({ ...props.question });
  return (
    <div className={css.root}>
      <span className={css.timer}>{timer.seconds}</span>
      <span className={css.title}>{props.question.title}</span>
      <ol>
        {shuffledAnswers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            answered={answered}
            onAnswerSubmit={() => {
              setAnswered(true);
              props.onAnswerSubmitted(answer);
              timer.pause();
              context.switchPlayer();
            }}
          />
        ))}
      </ol>
    </div>
  );
};
