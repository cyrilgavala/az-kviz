import css from "./Board.module.css";
import { Letter } from "../word/Letter";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import cx from "classnames";
import { QuestionsContext } from "../../context/QuestionsContext";

export const Board: React.FC = () => {
  const playerContext = useContext(PlayerContext);
  const questionsContext = useContext(QuestionsContext);

  const questions = questionsContext.questions;

  if (questions.length > 0) {
    return (
      <div className={css.board}>
        <div className={cx(css.row, css.area)}>
          Otázky jsou z okruhu <b>{questionsContext.area}</b>
        </div>
        <div
          className={cx(css.row, css.player)}
          data-player={playerContext.currentPlayer}
        >
          Na tahu je hráč {playerContext.currentPlayer}
        </div>
        <div className={css.row}>
          <Letter
            letter="1"
            question={questions[0]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="2"
            question={questions[1]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="3"
            question={questions[2]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="4"
            question={questions[3]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="5"
            question={questions[4]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="6"
            question={questions[5]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="7"
            question={questions[6]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="8"
            question={questions[7]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="9"
            question={questions[8]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="10"
            question={questions[9]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="11"
            question={questions[10]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="12"
            question={questions[11]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="13"
            question={questions[12]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="14"
            question={questions[13]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="15"
            question={questions[14]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="16"
            question={questions[15]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="17"
            question={questions[16]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="18"
            question={questions[17]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="19"
            question={questions[18]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="20"
            question={questions[19]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="21"
            question={questions[20]}
            player={playerContext.currentPlayer}
          />
        </div>
        <div className={css.row}>
          <Letter
            letter="22"
            question={questions[21]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="23"
            question={questions[22]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="24"
            question={questions[23]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="25"
            question={questions[24]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="26"
            question={questions[25]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="27"
            question={questions[26]}
            player={playerContext.currentPlayer}
          />
          <Letter
            letter="28"
            question={questions[27]}
            player={playerContext.currentPlayer}
          />
        </div>
      </div>
    );
  }
  return null;
};
