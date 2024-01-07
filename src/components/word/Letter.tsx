import { AnswerType, QuestionType } from "../../models/models";
import * as Dialog from "@radix-ui/react-dialog";
import css from "./Letter.module.css";
import { Question } from "../question/Question";
import { useEffect, useState } from "react";

type Props = {
  letter: string;
  question: QuestionType;
  player: number;
};

export const Letter: React.FC<Props> = (props) => {
  const [isAnswered, setAnswered] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => setAnswered(""), [props.question]);

  const onAnswerSelected = (answer?: AnswerType): void => {
    setAnswered(
      answer !== undefined && answer.isCorrect
        ? `correct-${props.player}`
        : "incorrect",
    );
  };

  const handleClick = () => {
    if (isAnswered === "") {
      setOpen((open) => !open);
    } else {
      setAnswered(Math.random() < 0.5 ? "correct-1" : "correct-2");
    }
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild onClick={handleClick}>
        <button
          className={css.trigger}
          data-status={isAnswered}
          disabled={isAnswered !== ""}
        >
          {props.letter}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css.overlay}
          onClick={() => setOpen((open) => !open)}
        />
        <Dialog.Content className={css.dialogContent}>
          <Question
            question={props.question}
            onAnswerSubmitted={onAnswerSelected}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
