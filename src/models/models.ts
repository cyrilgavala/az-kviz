export type AnswerType = {
  title: string;
  isCorrect: boolean;
};

export type QuestionType = {
  title: string;
  answers: AnswerType[];
  time: number;
};
