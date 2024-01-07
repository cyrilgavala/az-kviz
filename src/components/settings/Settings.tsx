import { useContext, useState } from "react";
import css from "./Settings.module.css";
import { QuestionsContext } from "../../context/QuestionsContext";
import questionsBank from "../../models/questions.json";
import { PlayerContext } from "../../context/PlayerContext";

export const Settings: React.FC = () => {
  const [isOpen, setOpen] = useState(true);
  const [key, setKey] = useState("");

  const questionsContext = useContext(QuestionsContext);
  const playerContext = useContext(PlayerContext);

  const selectQuestions = (key: string) => {
    setKey(key);
    questionsContext.selectQuestions(key);
    playerContext.resetPlayer();
    if (key !== "") {
      setOpen((open) => !open);
    }
  };

  const selectOptions = () => {
    return questionsBank.map((it) => (
      <option key={it.key} value={it.key}>
        {it.title}
      </option>
    ));
  };

  return (
    <div className={css.settings} data-state={isOpen}>
      <button className={css.trigger} onClick={() => setOpen((open) => !open)}>
        &#9881;
      </button>
      {isOpen && (
        <div className={css.content}>
          <select
            className={css.select}
            name="range"
            value={key}
            onInput={(event) => selectQuestions(event.currentTarget.value)}
          >
            <option value="">Vyber okruh</option>
            {selectOptions()}
          </select>
          <button
            className={css.newGameButton}
            onClick={() => selectQuestions("")}
          >
            New game
          </button>
        </div>
      )}
    </div>
  );
};
