import { createContext, useState } from "react";
import { QuestionType } from "../models/models";
import questionsBank from "../models/questions.json";

export interface QuestionsContextValue {
  questions: QuestionType[];
  selectQuestions: (key: string) => void;
  area: string;
}

export const QuestionsContext = createContext<QuestionsContextValue>({
  questions: [],
} as any);

export const QuestionsContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [area, setArea] = useState<string>("");

  const selectQuestions = (key: string) => {
    setQuestions(
      key === ""
        ? []
        : questionsBank.filter((it) => String(it.key) === key)[0].questions,
    );
    setArea(
      key === ""
        ? ""
        : questionsBank.filter((it) => String(it.key) === key)[0].title,
    );
  };

  return (
    <QuestionsContext.Provider value={{ questions, selectQuestions, area }}>
      {props.children}
    </QuestionsContext.Provider>
  );
};
